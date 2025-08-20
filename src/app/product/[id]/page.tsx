import { getUniqueProduct } from "@/libs/requests";
import AsidePageProducts from "@/components/AsidePageProduct";
import "@/styles/page-product.css";
import { Product } from "@/types/types";

interface PropsParamsProduct {
  params: Promise<{ id: string }>;
}

export default async function ProductId({ params }: PropsParamsProduct) {
  const { id } = await params;
  const product: Product = await getUniqueProduct(id);

  return (
    <section className="page-product">
      <div className="container-page-product">
        {product.picture && (
          <>
            <img
              src={product.picture}
              alt={product.title || "Product image"}
              loading="lazy"
              width={500}
              height={500}
              className="image-page-product"
            />
            <AsidePageProducts product={product} />
          </>
        )}
      </div>
    </section>
  );
}
