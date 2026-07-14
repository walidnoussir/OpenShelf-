import { connectDB } from "@/lib/mongodb";
import { BookInput } from "@/lib/validators";
import Book from "@/models/Book";

export async function getAllBooks() {
  await connectDB();

  return await Book.find().sort({
    createdAt: -1,
  });
}

export async function createBook(data: BookInput) {
  await connectDB();

  const book = await Book.create(data);
  return book;
}

export async function getBookById(id: string) {
  await connectDB();

  return await Book.findById(id);
}

export async function updateBook(id: string, data: BookInput) {
  await connectDB();

  return await Book.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
}

export async function deleteBook(id: string) {
  await connectDB();

  return await Book.findByIdAndDelete(id);
}
