"use client";

import BookForm from "@/components/BookForm";
import { createBook } from "@/lib/bookApi";
import { BookFormData } from "@/types/book";
import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddBook() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<BookFormData>({
    title: "",
    author: "",
    isbn: "",
    category: "",
    publicationYear: new Date().getFullYear(),
    description: "",
    status: "Available",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "publicationYear" ? Number(value) : value,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      setLoading(true);

      await createBook(formData);

      router.push("/");
      router.refresh();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        console.log(error.response?.status);
        alert(JSON.stringify(error.response?.data));
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <BookForm
      formData={formData}
      loading={loading}
      mode="create"
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
