import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import ProductSection from "@/app/components/ProductSection";
import CustomOrder from "@/app/components/CustomOrder";
import Cart from "@/app/components/Cart";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="divide-y divide-gray-100">
          <ProductSection category="amigurumis" />
          <ProductSection category="personajes" />
          <ProductSection category="jabones" />
          <ProductSection category="arcilla" />
        </div>
        <CustomOrder />
      </main>
      <Footer />
      <Cart />
    </>
  );
}
