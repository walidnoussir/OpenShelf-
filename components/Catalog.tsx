"use client";

import { useMemo, useState } from "react";

import SearchBar from "./SearchBar";
import BookCard from "./BookCard";

import type { Book } from "@/types/book";

interface CatalogProps {
  books: Book[];
}

export default function Catalog({ books }: CatalogProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"All" | "Available" | "Borrowed">("All");

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesSearch =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());

      const matchesStatus = filter === "All" ? true : book.status === filter;

      return matchesSearch && matchesStatus;
    });
  }, [books, search, filter]);

  return (
    <>
      <section className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex overflow-hidden rounded-xl bg-[#E5EEFF]">
          <button
            onClick={() => setFilter("All")}
            className={`px-5 py-3 ${
              filter === "All"
                ? "bg-white font-medium text-[#004AC6]"
                : "text-slate-700"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("Available")}
            className={`px-5 py-3 ${
              filter === "Available"
                ? "bg-white font-medium text-[#004AC6]"
                : "text-slate-700"
            }`}
          >
            Available
          </button>

          <button
            onClick={() => setFilter("Borrowed")}
            className={`px-5 py-3 ${
              filter === "Borrowed"
                ? "bg-white font-medium text-[#004AC6]"
                : "text-slate-700"
            }`}
          >
            Borrowed
          </button>
        </div>

        <SearchBar value={search} onChange={setSearch} />
      </section>

      <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book._id} book={book} />)
        ) : (
          <div className="col-span-full py-20 text-center">
            <h2 className="text-2xl font-semibold">No books found</h2>

            <p className="mt-2 text-slate-500">Try another search or filter.</p>
          </div>
        )}
      </section>
    </>
  );
}
