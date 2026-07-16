import { Plus } from "lucide-react";
import Link from "next/link";

import { getAllBooks } from "@/services/book.service";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import { Book } from "@/types/book";

export default async function HomePage() {
  const books = await getAllBooks();

  return (
    <main className="min-h-screen bg-[#F8F9FF]">
      <div className="mx-auto max-w-7xl px-8 py-10">
        {/* Hero */}
        <section className="mb-10 rounded-3xl bg-[#004AC6] px-12 py-14 text-white shadow-lg">
          <h1 className="mb-4 text-5xl font-bold">Open Shelf Library</h1>

          <p className="max-w-3xl text-lg leading-8 text-blue-100">
            Empowering knowledge management with precision and clarity. Manage
            your entire digital and physical catalog through an intuitive,
            modern interface designed for the future of libraries.
          </p>
        </section>

        {/* Toolbar */}
        <section className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/books/create"
              className="flex items-center gap-2 rounded-xl bg-[#006C49] px-6 py-3 font-medium text-white transition hover:opacity-90"
            >
              <Plus size={20} />
              Add Book
            </Link>

            <div className="flex overflow-hidden rounded-xl bg-[#E5EEFF]">
              <button className="bg-white px-5 py-3 font-medium text-[#004AC6]">
                All
              </button>

              <button className="px-5 py-3 text-gray-700 hover:bg-white">
                Available
              </button>

              <button className="px-5 py-3 text-gray-700 hover:bg-white">
                Borrowed
              </button>
            </div>
          </div>

          <SearchBar />
        </section>

        {/* Books */}
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {books.length > 0 ? (
            books.map((book: Book) => (
              <BookCard key={book._id.toString()} book={book} />
            ))
          ) : (
            <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white py-24 text-center">
              <h2 className="text-2xl font-semibold text-slate-700">
                No books found
              </h2>

              <p className="mt-2 text-slate-500">
                Start by adding your first book.
              </p>

              <Link
                href="/books/create"
                className="mt-6 inline-flex rounded-xl bg-[#004AC6] px-6 py-3 font-medium text-white"
              >
                Add Book
              </Link>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
