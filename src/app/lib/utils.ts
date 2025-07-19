import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface Testimonial {
  id: string;
  name: string;
  avatarUrl: string;
  rating: number;
  quote: string;
}

export interface QAItem {
  question: string;
  answer: string;
}

export interface OfferFeature {
  name: string;
  description: string;
}
