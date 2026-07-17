import { Clock3, LibraryBig, Star } from "lucide-react";

export default function BookStats() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <Clock3 className="mb-3 text-blue-600" />

        <h4 className="text-lg font-semibold">Recently Added</h4>

        <p className="mt-2 text-slate-500">Available in the library catalog.</p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <LibraryBig className="mb-3 text-blue-600" />

        <h4 className="text-lg font-semibold">Collection</h4>

        <p className="mt-2 text-slate-500">
          Part of the Open Shelf collection.
        </p>
      </div>

      <div className="rounded-3xl bg-white p-6 shadow-sm">
        <Star className="mb-3 text-blue-600" />

        <h4 className="text-lg font-semibold">Library Status</h4>

        <p className="mt-2 text-slate-500">Ready for borrowing.</p>
      </div>
    </div>
  );
}
