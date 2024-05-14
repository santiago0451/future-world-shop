import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  keywords: ["ecommerce", "future", "world", "technology"],
};

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
