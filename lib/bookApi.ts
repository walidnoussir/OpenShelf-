import api from "./axios";

import type { Book } from "@/types/book";

export interface CreateBookData {
  title: string;
  author: string;
  isbn: string;
  category: string;
  publicationYear: number;
  description: string;
  status: Book["status"];
}

export async function createBook(data: CreateBookData) {
  const response = await api.post("/books", data);

  return response.data;
}

export async function getBook(id: string) {
  const response = await api.get(`/books/${id}`);
  return response.data.data;
}

export async function updateBook(id: string, data: CreateBookData) {
  return api.put(`/books/${id}`, data);
}

export async function deleteBook(id: string) {
  const response = await api.delete(`/books/${id}`);

  return response.data;
}
