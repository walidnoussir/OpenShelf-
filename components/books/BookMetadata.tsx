import { BookOpen, Calendar, Hash, User } from "lucide-react";
import type { Book } from "@/types/book";

interface BookMetadataProps {
  book: Book;
}

export default function BookMetadata({ book }: BookMetadataProps) {
  return (
    <div className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
      <h3 className="mb-6 text-2xl font-bold">Book Metadata</h3>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-center gap-4">
          <BookOpen className="text-blue-600" />

          <div>
            <p className="text-sm text-slate-500">Category</p>

            <p className="font-semibold">{book.category}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <User className="text-blue-600" />

          <div>
            <p className="text-sm text-slate-500">Author</p>

            <p className="font-semibold">{book.author}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Calendar className="text-blue-600" />

          <div>
            <p className="text-sm text-slate-500">Publication Year</p>

            <p className="font-semibold">{book.publicationYear}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Hash className="text-blue-600" />

          <div>
            <p className="text-sm text-slate-500">ISBN</p>

            <p className="font-semibold">{book.isbn}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
