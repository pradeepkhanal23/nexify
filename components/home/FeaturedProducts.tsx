import { fetchFeaturedProducts } from "../../utils/actions";
import EmptyList from "../global/EmptyList";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList message="Products not found" />;

  return (
    <section>
      <ProductsGrid products={products} />
    </section>
  );
};
export default FeaturedProducts;
