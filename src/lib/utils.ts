import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// cn() combines clsx + twMerge for smarter merging
export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}
