import Image from "next/image";

interface BookCoverProps {
  status: "Available" | "Borrowed";
}

export default function BookCover({ status }: BookCoverProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow">
      <div className="relative h-[430px]">
        <Image
          src="/images/book-placeholder.jpg"
          alt="Book Cover"
          fill
          className="object-cover"
        />

        <span
          className={`absolute right-5 top-5 rounded-full px-4 py-2 text-sm font-semibold ${
            status === "Available"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </div>
    </div>
  );
}
