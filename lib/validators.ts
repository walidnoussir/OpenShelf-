import { z } from "zod";

export const bookSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title must contain at least 2 characters")
    .max(100, "Title cannot exceed 100 characters"),

  author: z
    .string()
    .trim()
    .min(2, "Author must contain at least 2 characters")
    .max(100, "Author cannot exceed 100 characters"),

  isbn: z
    .string()
    .trim()
    .min(10, "ISBN must contain at least 10 characters")
    .max(20, "ISBN cannot exceed 20 characters"),

  category: z
    .string()
    .trim()
    .min(2, "Category is required")
    .max(50, "Category cannot exceed 50 characters"),

  publicationYear: z.coerce
    .number()
    .int("Publication year must be an integer")
    .min(1000, "Invalid publication year")
    .max(new Date().getFullYear(), "Publication year cannot be in the future"),

  description: z
    .string()
    .trim()
    .min(10, "Description must contain at least 10 characters")
    .max(1000, "Description cannot exceed 1000 characters"),

  status: z.enum(["Available", "Borrowed"]).default("Available"),
});

export type BookInput = z.infer<typeof bookSchema>;
