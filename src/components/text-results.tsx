'use client'

import { useSearchParams } from "next/navigation"

export default function TextResults(){
    const query = useSearchParams()

    return (
        <span>Mostrando resultados para <span className="font-bold">{query.get('q')}</span></span>
    )
}