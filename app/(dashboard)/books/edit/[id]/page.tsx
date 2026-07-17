"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import type { BookFormData } from "@/types/book";
import BookForm from "@/components/BookForm";
import { getBook, updateBook } from "@/lib/bookApi";

export default function EditBook() {
  const { id } = useParams<{ id: string }>();

  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState<BookFormData>({
    title: "",
    author: "",
    isbn: "",
    category: "",
    publicationYear: new Date().getFullYear(),
    description: "",
    status: "Available",
  });

  useEffect(() => {
    async function fetchBook() {
      try {
        const book = await getBook(id);

        setFormData({
          title: book.title,
          author: book.author,
          isbn: book.isbn,
          category: book.category,
          publicationYear: book.publicationYear,
          description: book.description,
          status: book.status,
        });
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [id]);

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
      setSaving(true);

      await updateBook(id, formData);

      router.push(`/`);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <div className="py-20 text-center">Loading...</div>;
  }

  return (
    <BookForm
      formData={formData}
      loading={saving}
      mode="edit"
      onChange={handleChange}
      onSubmit={handleSubmit}
    />
  );
}
