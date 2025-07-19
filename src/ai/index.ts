'use server';
/**
 * @fileOverview This file contains the Genkit configuration and AI flows for the application.
 */
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';
import {z} from 'genkit';

// Initialize Genkit
export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});


// Testimonial Summarization Flow
const SummarizeTestimonialInputSchema = z.object({
  testimonial: z.string().describe('The testimonial text to summarize.'),
});
export type SummarizeTestimonialInput = z.infer<typeof SummarizeTestimonialInputSchema>;

const SummarizeTestimonialOutputSchema = z.object({
  summary: z.string().describe('The summarized testimonial text.'),
});
export type SummarizeTestimonialOutput = z.infer<typeof SummarizeTestimonialOutputSchema>;

const summarizeTestimonialPrompt = ai.definePrompt({
  name: 'summarizeTestimonialPrompt',
  input: {schema: SummarizeTestimonialInputSchema},
  output: {schema: SummarizeTestimonialOutputSchema},
  prompt: `Summarize the following testimonial in a concise and impactful way to highlight its key message. Focus on the benefits and positive outcomes mentioned in the testimonial, and keep the summary under 50 words.\n\nTestimonial: {{{testimonial}}}`,
});

const summarizeTestimonialFlow = ai.defineFlow(
  {
    name: 'summarizeTestimonialFlow',
    inputSchema: SummarizeTestimonialInputSchema,
    outputSchema: SummarizeTestimonialOutputSchema,
  },
  async input => {
    const {output} = await summarizeTestimonialPrompt(input);
    return output!;
  }
);


// Server Action to handle the summarization
const SummarizeSchema = z.object({
  testimonial: z.string().min(10, "Testimonial must be at least 10 characters long."),
});

export async function handleSummarizeTestimonial(testimonial: string) {
  try {
    const validation = SummarizeSchema.safeParse({ testimonial });
    if (!validation.success) {
      return { success: false, error: validation.error.errors[0].message };
    }
    const result = await summarizeTestimonialFlow({ testimonial });
    return { success: true, summary: result.summary };
  } catch (e) {
    console.error(e);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
