import type { Book } from "@/types/book";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h2 className="text-xl font-semibold">{book.title}</h2>

      <p className="mt-2 text-gray-600">
        <span className="font-medium">Author:</span> {book.author}
      </p>

      <p className="text-gray-600">
        <span className="font-medium">Category:</span> {book.category}
      </p>

      <p className="text-gray-600">
        <span className="font-medium">Year:</span> {book.publicationYear}
      </p>

      <span
        className={`mt-4 inline-block rounded-full px-3 py-1 text-sm font-medium ${
          book.status === "Available"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {book.status}
      </span>
    </div>
  );
}
