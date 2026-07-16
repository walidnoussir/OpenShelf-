import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <SearchBar />

      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="font-semibold text-slate-800">Admin</p>
          <p className="text-sm text-slate-500">Library Manager</p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          A
        </div>
      </div>
    </header>
  );
}
