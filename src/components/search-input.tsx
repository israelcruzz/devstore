"use client";

import { Search } from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function SearchInput() {
  const router = useRouter();
  const searchQuery = useSearchParams();

  function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const query = formData.get("q");

    if (!query) {
      return null;
    }

    router.push(`http://localhost:3000/search?q=${String(query)}`);
  }

  return (
    <form
      className="flex w-[320px] items-center gap-3 px-5 py-3 rounded-full bg-zinc-900"
      onSubmit={handleFormSubmit}
    >
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        defaultValue={String(searchQuery.get('q') ?? "")}
        name="q"
        type="text"
        placeholder="Buscar produtos..."
        className="flex-1 outline-none bg-transparent placeholder:text-zinc-500 text-sm"
      />
    </form>
  );
}
