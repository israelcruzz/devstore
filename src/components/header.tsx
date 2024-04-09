import { Search, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <section className="flex items-center gap-3">
        <Link href='/' className="text-2xl font-extrabold">devstore</Link>

        <form className="flex w-[320px] items-center gap-3 px-5 py-3 rounded-full bg-zinc-900">
          <Search className="w-5 h-5 text-zinc-500" />
          <input
            type="text"
            placeholder="Buscar produtos..."
            className="flex-1 outline-none bg-transparent placeholder:text-zinc-500 text-sm"
          />
        </form>
      </section>

      <section className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-4 h-4" />
          <h1>Cart (0)</h1>
        </div>

        <div className="w-px h-4 bg-slate-700"></div>

        <Link href='/' className="flex gap-3 items-center">
            <span className="font-medium hover:underline text-sm">Account</span>
            <Image width={24} height={24} className="rounded-full h-6 w-6" src="/profile.png" alt="" />
        </Link>
      </section>
    </header>
  );
}
