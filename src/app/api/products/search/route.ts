import { NextRequest } from "next/server";
import data from "@/app/api/products/data.json";
import { z } from "zod";

export async function GET(request: NextRequest){
    const { searchParams } = request.nextUrl

    const query = z.string().parse(searchParams.get('q'))

    const filteredProducts = data.products.filter((product) => {
        return product.slug.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    })
     
    return Response.json(filteredProducts);
}