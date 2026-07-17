import { Plus } from "lucide-react";
import Link from "next/link";

import { getAllBooks } from "@/services/book.service";
import SearchBar from "@/components/SearchBar";
import BookCard from "@/components/BookCard";
import { Book } from "@/types/book";
import Catalog from "@/components/Catalog";

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

        <Catalog books={books} />
      </div>
    </main>
  );
}
