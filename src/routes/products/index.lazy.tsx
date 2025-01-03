import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import AnimateOnScroll from "../../components/animation/AnimateOnScroll";
import Card from "../../components/common/Card";
import SEOMetadata from "../../components/seo/SEOMetadata";
import { getMetadata } from "../../utils/utils";
import { useEffect, useState } from "react";
import { fetchProductList } from "../../services/product.services";

export const Route = createLazyFileRoute("/products/")({
  component: Products,
});

interface CardImage {
  src: string;
  alt: string;
}

interface Product {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  cardImage: CardImage;
}

function Products() {
  const navigate = useNavigate({ from: "/products" });
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProductList = async () => {
      const products = await fetchProductList();
      setProducts(products);
    };

    getProductList();
  }, []);
  return (
    <>
      <SEOMetadata {...getMetadata("products")} />
      <div className="p-2">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-center">
          {products.map((product) => (
            <AnimateOnScroll key={product.id}>
              <Card
                {...product}
                onClick={() => navigate({ to: `${product.id}` })}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </>
  );
}
