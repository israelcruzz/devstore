'use client'

import { useCart } from "@/context/cart-context";

interface AddCartButtonProps {
    productId: number
}

export default function AddCartButton({ productId }: AddCartButtonProps) {
  const { addToCart } = useCart()

  const handleAddCart = () => {
    addToCart(productId)
  }

  return (
    <button className="w-full h-12 bg-emerald-500 px-5 py-2.5 rounded-full font-bold mt-6" onClick={handleAddCart}>
      Adicionar ao carrinho
    </button>
  );
}
