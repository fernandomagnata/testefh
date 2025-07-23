'use server';

import { summarizeTestimonial } from '@/ai/flows/summarize-testimonial';
import { z } from 'zod';

const SummarizeSchema = z.object({
  testimonial: z.string().min(10, "Testimonial must be at least 10 characters long."),
});

export async function handleSummarizeTestimonial(testimonial: string) {
  try {
    const validation = SummarizeSchema.safeParse({ testimonial });
    if (!validation.success) {
      return { success: false, error: validation.error.errors[0].message };
    }
    const result = await summarizeTestimonial({ testimonial });
    return { success: true, summary: result.summary };
  } catch (e) {
    console.error(e);
    return { success: false, error: "An unexpected error occurred. Please try again." };
  }
}
