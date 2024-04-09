import { IProduct } from "@/data/types/product";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};

async function fetchProducts(): Promise<IProduct[]> {
  const response = await fetch("http://localhost:3000/api/products/featured", {
    next: {
      revalidate: 60 * 60,
    },
  });

  const product = await response.json();

  return product;
}

export default async function Home() {
  const [oneFeaturedProduct, ...othersProduct] = await fetchProducts();

  return (
    <div className="w-full mt-6 flex gap-6">
      <section className="w-full bg-zinc-900 rounded-lg relative">
        <Link href={`/product/${oneFeaturedProduct.slug}`}>
          <Image
            src={oneFeaturedProduct.image}
            width={831}
            height={714}
            alt={oneFeaturedProduct.description}
            quality={100}
          />
        </Link>

        <div className="absolute bottom-0 right-0 m-44 w-[240px] h-12 bg-black/60 border-2 border-zinc-500 rounded-full overflow-hidden flex items-center justify-center gap-3 pl-3 pr-1">
          <h1 className="flex-1 text-sm truncate">
            {oneFeaturedProduct.title}
          </h1>
          <div className="bg-violet-500 w-[82px] h-10 flex items-center justify-center rounded-full">
            <h1 className="font-bold">
              {oneFeaturedProduct.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </h1>
          </div>
        </div>
      </section>

      <section className="w-[620px] flex flex-col gap-6">
        {...othersProduct.map((product) => {
          return (
            <Link
              href={`/product/${product.slug}`}
              className="relative bg-zinc-900 rounded-lg"
              key={product.id}
            >
              <Image
                src={product.image}
                width={831}
                height={714}
                alt=""
                quality={100}
              />

              <div className="absolute bottom-0 right-0 m-12 w-[240px] h-12 bg-black/60 border-2 border-zinc-500 rounded-full overflow-hidden flex items-center justify-center gap-3 pl-3 pr-1">
                <h1 className="flex-1 text-sm truncate">{product.title}</h1>
                <div className="bg-violet-500 w-[82px] h-10 flex items-center justify-center rounded-full">
                  <h1 className="font-bold">
                    {product.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </h1>
                </div>
              </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
