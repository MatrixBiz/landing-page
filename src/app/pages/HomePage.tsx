import { Hero } from "@/app/components/Hero";
import { ProductsSection } from "@/app/components/ProductsSection";
import { MadeInRussia } from "@/app/components/MadeInRussia";

export function HomePage() {
    return (
        <>
            <Hero />
            <ProductsSection />
            <MadeInRussia />
        </>
    );
}
