"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

import type { Book } from "@/types/book";
import Image from "next/image";
import { deleteBook } from "@/lib/bookApi";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const router = useRouter();

  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${book.title}"?`,
    );

    if (!confirmed) return;

    try {
      await deleteBook(book._id);

      router.refresh();
    } catch (error) {
      if (error instanceof AxiosError) {
        alert(error.response?.data?.message ?? "Failed to delete book.");
      } else {
        alert("Something went wrong.");
      }
    }
  }
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md">
      {/* Placeholder Cover */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src="/images/book-placeholder.jpg"
          alt={book.title}
          fill
          className="object-cover"
        />

        <span
          className={`absolute right-3 top-3 rounded-md px-3 py-1 text-xs font-medium ${
            book.status === "Available"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {book.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="truncate text-xl font-semibold">{book.title}</h2>

        <p className="mt-2 text-slate-700">{book.author}</p>

        <p className="mt-1 text-sm text-slate-500">
          {book.category} • {book.publicationYear}
        </p>

        <div className="mt-4 border-t border-slate-200 pt-4">
          <div className="flex items-center justify-between">
            <Link
              href={`/books/${book._id}`}
              className="font-medium text-[#004AC6] hover:underline"
            >
              View
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href={`/books/edit/${book._id}`}
                className="text-slate-600 transition hover:text-[#004AC6]"
                aria-label="Edit book"
              >
                <Pencil size={18} />
              </Link>

              <button
                type="button"
                onClick={handleDelete}
                className="cursor-pointer text-slate-600 transition hover:text-red-600"
                aria-label="Delete book"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
