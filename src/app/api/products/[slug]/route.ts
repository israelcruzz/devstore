import data from "@/app/api/products/data.json";

interface GetSlugParams {
  params: {
    slug: string;
  };
}

export async function GET(_: Request, { params }: GetSlugParams) {
  const product = data.products.filter(
    (product) => product.slug === params.slug
  );

  if(!product){
    return null
  }

  return Response.json(product);
}
