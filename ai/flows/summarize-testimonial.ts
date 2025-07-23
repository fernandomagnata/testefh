'use server';

/**
 * @fileOverview This file defines a Genkit flow for summarizing user testimonials.
 *
 * - summarizeTestimonial - A function that summarizes a given testimonial.
 * - SummarizeTestimonialInput - The input type for the summarizeTestimonial function.
 * - SummarizeTestimonialOutput - The output type for the summarizeTestimonial function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeTestimonialInputSchema = z.object({
  testimonial: z.string().describe('The testimonial text to summarize.'),
});
export type SummarizeTestimonialInput = z.infer<typeof SummarizeTestimonialInputSchema>;

const SummarizeTestimonialOutputSchema = z.object({
  summary: z.string().describe('The summarized testimonial text.'),
});
export type SummarizeTestimonialOutput = z.infer<typeof SummarizeTestimonialOutputSchema>;

export async function summarizeTestimonial(input: SummarizeTestimonialInput): Promise<SummarizeTestimonialOutput> {
  return summarizeTestimonialFlow(input);
}

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
