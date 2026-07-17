export interface Book {
  _id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  publicationYear: number;
  description: string;
  status: "Available" | "Borrowed";
  createdAt: string;
  updatedAt: string;
}

export interface BookFormData {
  title: string;
  author: string;
  isbn: string;
  category: string;
  publicationYear: number;
  description: string;
  status: "Available" | "Borrowed";
}
