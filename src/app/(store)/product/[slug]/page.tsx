import { IProduct } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";

interface ProductParams {
  params: {
    slug: string;
  };
}


export async function generateMetadata({ params }: ProductParams): Promise<Metadata> {
    const nameProduct = await fetchProduct(params.slug)

    return {
        title: nameProduct.title
    }
}

async function fetchProduct(slug: string): Promise<IProduct> {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`);
  const product = await response.json();

  return product[0];
}

export default async function Product({ params }: ProductParams) {
  const product = await fetchProduct(params.slug);

  return (
    <div className="w-full flex mt-6">
      <section className="w-full">
        <Image
          src={product.image}
          alt=""
          height={625}
          width={625}
          quality={100}
        />
      </section>

      <section className="w-full flex flex-col justify-center px-16 py-16">
        <h1 className="font-bold text-3xl">{product.title}</h1>
        <p className="text-base text-zinc-400 font-normal">
          {product.description}
        </p>

        <div className="flex gap-3 items-center mt-6">
          <div className="px-5 py-2.5 bg-violet-500 rounded-full">
            <h1 className="font-bold">
              {product.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
                maximumFractionDigits: 0,
                minimumFractionDigits: 0,
              })}
            </h1>
          </div>
          <span className="text-zinc-400 text-sm">
            Em 12x s/ juros de R${product.price / 12}
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
