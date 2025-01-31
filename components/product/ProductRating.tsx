import { Star } from "lucide-react";

const ProductRating = () => {
  // temporary value
  const reviews = 128;
  const rating = 4.5;
  return (
    <>
      <Star />
      <span>
        {rating}
        {reviews}
      </span>
    </>
  );
};
export default ProductRating;
