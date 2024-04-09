import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./search-input";
import CartWidget from "./cart-widget";

export default function Header() {
  return (
    <header className="w-full flex justify-between">
      <section className="flex items-center gap-3">
        <Link href='/' className="text-2xl font-extrabold">devstore</Link>

        <SearchInput />
      </section>

      <section className="flex items-center gap-3">
        <CartWidget />

        <div className="w-px h-4 bg-slate-700"></div>

        <Link href='/' className="flex gap-3 items-center">
            <span className="font-medium hover:underline text-sm">Account</span>
            <Image width={24} height={24} className="rounded-full h-6 w-6" src="/profile.png" alt="" />
        </Link>
      </section>
    </header>
  );
}
