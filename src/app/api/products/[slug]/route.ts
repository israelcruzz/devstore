import data from "@/app/api/products/data.json";

interface GetSlugParams {
  params: {
    slug: string;
  };
}

export async function GET(_: Request, { params }: GetSlugParams) {
  await new Promise(resolve => setTimeout(resolve, 2000))

  const product = data.products.filter(
    (product) => product.slug === params.slug
  );

  if(!product){
    return null
  }

  return Response.json(product);
}
