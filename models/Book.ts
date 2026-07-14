import { Schema, Document, models, model } from "mongoose";

export interface IBook extends Document {
  title: string;
  author: string;
  isbn: string;
  category: string;
  publicationYear: number;
  description: string;
  status: "Available" | "Borrowed";
  createdAt: Date;
  updatedAt: Date;
}

const BookSchema = new Schema<IBook>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    author: {
      type: String,
      required: [true, "Author is required"],
      trim: true,
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
      unique: true,
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      trim: true,
    },
    publicationYear: {
      type: Number,
      required: [true, "Publication year is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    status: {
      type: String,
      enum: ["Available", "Borrowed"],
      default: "Available",
    },
  },
  {
    timestamps: true,
  },
);

const Book = models.Book || model<IBook>("Book", BookSchema);

export default Book;
