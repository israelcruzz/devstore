import Header from "@/components/header";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }){
    return (
        <div className="max-w-[1240px] mx-auto py-6">
            <Header />
            {children}
        </div>
    )
}