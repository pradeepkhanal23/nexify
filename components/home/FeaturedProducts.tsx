import { fetchFeaturedProducts } from "../../utils/actions";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../product/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeaturedProducts();

  if (products.length === 0) return <EmptyList message="Products not found" />;

  console.log(products);

  return (
    <section>
      <SectionTitle title="Featured Products" />
      <ProductsGrid products={products} />
    </section>
  );
};
export default FeaturedProducts;
