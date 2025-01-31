import { Star } from "lucide-react";

const ProductRating = () => {
  const rating = 4.2;
  const count = 25;

  const className = `flex gap-3 items-center text-md mt-1 mb-2`;
  const countValue = `(${count}) reviews`;
  return (
    <span className={className}>
      <Star className="w-5 h-5" />
      {rating} {countValue}
    </span>
  );
};
export default ProductRating;
