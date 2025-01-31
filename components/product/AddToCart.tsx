import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const AddToCart = () => {
  return (
    <Button className="capitalize" size="lg">
      Add to Cart <ShoppingCart />
    </Button>
  );
};
export default AddToCart;
