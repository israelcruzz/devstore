import { Metadata } from "next";
import Image from "next/image";

interface ProductParams {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "Product",
};

export default function Product({ params }: ProductParams) {
  return (
    <div className="w-full flex mt-6">
      <section className="w-full">
        <Image
          src="/moletom-never-stop-learning.png"
          alt=""
          height={625}
          width={625}
          quality={100}
        />
      </section>

      <section className="w-full flex flex-col justify-center px-16 py-16">
        <h1 className="font-bold text-3xl">Moletom Never Stop Learning</h1>
        <p className="text-base text-zinc-400 font-normal">
          Moletom fabricado com 88% de algodão e 12% de poliéster.
        </p>

        <div className="flex gap-3 items-center mt-6">
          <div className="px-5 py-2.5 bg-violet-500 rounded-full">
            <h1 className="font-bold">R$99</h1>
          </div>
          <span className="text-zinc-400 text-sm">
            Em 12x s/ juros de R$8,25
          </span>
        </div>

        <div className="flex flex-col gap-3 mt-6">
          <h1 className="text-base font-semibold">Tamanhos</h1>

          <div className="flex gap-2">
            <button className="w-[54px] px-2.5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-full font-bold">
              P
            </button>

            <button className="w-[54px] px-2.5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-full font-bold">
              M
            </button>

            <button className="w-[54px] px-2.5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-full font-bold">
              G
            </button>

            <button className="w-[54px] px-2.5 py-2.5 bg-zinc-800 border border-zinc-700 rounded-full font-bold">
              GG
            </button>
          </div>
        </div>

        <button className="w-full h-12 bg-emerald-500 px-5 py-2.5 rounded-full font-bold mt-6">
          Adicionar ao carrinho
        </button>
      </section>
    </div>
  );
}
