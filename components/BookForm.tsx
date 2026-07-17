"use client";

import Link from "next/link";

import type { BookFormData } from "@/types/book";

interface BookFormProps {
  formData: BookFormData;
  loading: boolean;
  mode: "create" | "edit";
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export default function BookForm({
  formData,
  loading,
  mode,
  onSubmit,
  onChange,
}: BookFormProps) {
  return (
    <section className="mx-auto max-w-6xl">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm">
        <Link href="/" className="text-slate-600 hover:text-blue-600">
          Catalog
        </Link>

        <span className="text-slate-400">›</span>

        <span className="font-medium text-blue-600">
          {mode === "create" ? "Add New Book" : "Edit Book"}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-slate-900">
        {mode === "create" ? "Register New Volume" : "Edit Book"}
      </h1>

      <p className="mt-3 text-lg text-slate-600">
        {mode === "create"
          ? "Complete the details below to add a new title to your library catalog."
          : "Update the information of this book."}
      </p>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="mt-10 rounded-3xl border border-slate-200 bg-white shadow-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-[#F5F8FF] px-8 py-6">
          <h2 className="text-3xl font-semibold">Book Information</h2>

          <span className="rounded-lg bg-slate-200 px-4 py-2 text-sm">
            {mode === "create" ? "Draft Mode" : "Editing"}
          </span>
        </div>

        {/* Body */}
        <div className="space-y-8 p-8">
          {/* Title + Author */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">Book Title</label>

              <input
                name="title"
                value={formData.title}
                onChange={onChange}
                placeholder="The Midnight Library"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Author</label>

              <input
                name="author"
                value={formData.author}
                onChange={onChange}
                placeholder="Matt Haig"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>
          </div>

          {/* ISBN + Category */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">ISBN</label>

              <input
                name="isbn"
                value={formData.isbn}
                onChange={onChange}
                placeholder="978-0-00-000000-0"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Category</label>

              <select
                name="category"
                value={formData.category}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
              >
                <option value="">Select category</option>
                <option value="Novel">Novel</option>
                <option value="Science">Science</option>
                <option value="Technology">Technology</option>
                <option value="History">History</option>
                <option value="Business">Business</option>
                <option value="Education">Education</option>
              </select>
            </div>
          </div>

          {/* Year + Status */}
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="mb-2 block font-medium">Publication Year</label>

              <input
                type="number"
                name="publicationYear"
                value={formData.publicationYear}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium">Status</label>

              <select
                name="status"
                value={formData.status}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500"
              >
                <option value="Available">Available</option>
                <option value="Borrowed">Borrowed</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="mb-2 block font-medium">Description</label>

            <textarea
              rows={7}
              name="description"
              value={formData.description}
              onChange={onChange}
              placeholder="Write a short description of the book..."
              className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-4 border-t border-slate-200 px-8 py-6">
          <Link
            href="/"
            className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100"
          >
            Cancel
          </Link>

          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-[#004AC6] px-8 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? mode === "create"
                ? "Saving..."
                : "Updating..."
              : mode === "create"
                ? "Save Book"
                : "Update Book"}
          </button>
        </div>
      </form>
    </section>
  );
}
