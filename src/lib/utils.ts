import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// cn() combines clsx + twMerge for smarter merging
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
