import Header from "@/components/header";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
      <div className="w-full mt-6 flex gap-6">
        <section className="w-full bg-zinc-900 rounded-lg relative">
          <Link href={"/"}>
            <Image
              src="/moletom-never-stop-learning.png"
              width={831}
              height={714}
              alt=""
              quality={100}
            />
          </Link>

          <div className="absolute bottom-0 right-0 m-44 w-[240px] h-12 bg-black/60 border-2 border-zinc-500 rounded-full overflow-hidden flex items-center justify-center gap-3 pl-3 pr-1">
            <h1 className="flex-1 text-sm truncate">Moletom Never Stop</h1>
            <div className="bg-violet-500 w-[82px] h-10 flex items-center justify-center rounded-full">
              <h1>R$129</h1>
            </div>
          </div>
        </section>
        <section className="w-[620px] flex flex-col gap-6">
          <Link href={"/"} className="relative bg-zinc-900 rounded-lg">
            <Image
              src="/moletom-ai-side.png"
              width={831}
              height={714}
              alt=""
              quality={100}
            />

            <div className="absolute bottom-0 right-0 m-12 w-[240px] h-12 bg-black/60 border-2 border-zinc-500 rounded-full overflow-hidden flex items-center justify-center gap-3 pl-3 pr-1">
              <h1 className="flex-1 text-sm truncate">Moletom Come Ai Side</h1>
              <div className="bg-violet-500 w-[82px] h-10 flex items-center justify-center rounded-full">
                <h1>R$129</h1>
              </div>
            </div>
          </Link>

          <Link href={"/"} className="relative bg-zinc-900 rounded-lg">
            <Image
              src="/camiseta-dowhile-2022.png"
              width={831}
              height={714}
              alt=""
              quality={100}
            />

            <div className="absolute bottom-0 right-0 m-12 w-[240px] h-12 bg-black/60 border-2 border-zinc-500 rounded-full overflow-hidden flex items-center justify-center gap-3 pl-3 pr-1">
              <h1 className="flex-1 text-sm truncate">Camiseta Expande Mind</h1>
              <div className="bg-violet-500 w-[82px] h-10 flex items-center justify-center rounded-full">
                <h1>R$129</h1>
              </div>
            </div>
          </Link>
        </section>
      </div>
  );
}
