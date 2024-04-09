import TextResults from "@/components/text-results";
import { IProduct } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

interface SearchPageSearchQuery {
  searchParams: {
    q: string;
  };
}

async function fetchFilterProducts(q: string): Promise<IProduct[]> {
  const response = await fetch(
    `http://localhost:3000/api/products/search?q=${q}`
  );
  const products = await response.json();

  return products;
}

export default async function Search({ searchParams }: SearchPageSearchQuery) {
  if (!searchParams.q) {
    redirect("/");
  }

  const products = await fetchFilterProducts(searchParams.q);

  return (
    <div className="w-full mt-6 flex flex-col gap-6">
      <TextResults />

      <div className="w-full grid grid-cols-4 gap-4">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.slug}`}
              className="relative bg-zinc-900 rounded-lg"
              key={product.id}
            >
              <Image
                src={product.image}
                width={380}
                height={380}
                alt=""
                quality={100}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
