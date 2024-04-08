import data from '@/app/api/products/data.json'

export async function GET(){
    const filteredProducts = data.products.filter((product) => product.featured)

    return Response.json(filteredProducts)
}