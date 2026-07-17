"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

import { deleteBook, getBook } from "@/lib/bookApi";
import type { Book } from "@/types/book";

import BookCover from "@/components/books/BookCover";
import BookInfoCard from "@/components/books/BookInfoCard";
import BookMetadata from "@/components/books/BookMetadata";
import BookStats from "@/components/books/BookStats";

interface BookDetailsProps {
  params: Promise<{
    id: string;
  }>;
}

export default function BookDetails({ params }: BookDetailsProps) {
  const { id } = use(params);

  const router = useRouter();

  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBook() {
      try {
        const data = await getBook(id);
        setBook(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchBook();
  }, [id]);

  async function handleDelete() {
    if (!book) return;

    const confirmed = window.confirm(
      `Are you sure you want to delete "${book.title}"?`,
    );

    if (!confirmed) return;

    try {
      await deleteBook(book._id);

      router.push("/");
      router.refresh();
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data?.message ?? "Failed to delete book.");
      } else {
        alert("Something went wrong.");
      }
    }
  }

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!book) {
    return (
      <div className="flex h-[70vh] items-center justify-center text-xl font-semibold text-red-500">
        Book not found.
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl">
      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 text-blue-600 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Catalog
      </Link>

      <div className="grid gap-10 lg:grid-cols-[320px_1fr]">
        {/* Left Side */}
        <div>
          <BookCover status={book.status} />

          <div className="mt-6 grid gap-4">
            <BookInfoCard title="Category" value={book.category} />

            <BookInfoCard
              title="Publication Year"
              value={book.publicationYear}
            />

            <BookInfoCard title="ISBN" value={book.isbn} full />
          </div>
        </div>

        {/* Right Side */}
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-6xl font-bold leading-tight">{book.title}</h1>

              <p className="mt-4 text-3xl font-semibold text-slate-600">
                by {book.author}
              </p>
            </div>

            <div className="flex gap-4">
              <Link
                href={`/books/edit/${book._id}`}
                className="flex items-center gap-2 rounded-xl bg-[#004AC6] px-6 py-4 text-white transition hover:bg-blue-700"
              >
                <Pencil size={18} />
                Edit Book
              </Link>

              <button
                onClick={handleDelete}
                className="flex cursor-pointer items-center gap-2 rounded-xl bg-red-100 px-6 py-4 text-red-700 transition hover:bg-red-200"
              >
                <Trash2 size={18} />
                Delete
              </button>
            </div>
          </div>

          <hr className="my-10" />

          <div>
            <h2 className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
              Description
            </h2>

            <p className="text-lg leading-9 text-slate-700">
              {book.description}
            </p>
          </div>

          <BookMetadata book={book} />

          <BookStats />
        </div>
      </div>
    </section>
  );
}
