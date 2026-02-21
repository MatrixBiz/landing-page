import { Hero } from "../components/Hero";
import { ProductsSection } from "../components/ProductsSection";
import { MadeInRussia } from "../components/MadeInRussia";

export function HomePage() {
    return (
        <>
            <Hero />
            <ProductsSection />
            <MadeInRussia />
        </>
    );
}
