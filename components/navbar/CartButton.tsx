import { BsCart } from "react-icons/bs";
import { Button } from "../ui/button";
import Link from "next/link";

const CartButton = () => {
  let randomNumber = 2;
  return (
    <Button size="icon" variant="outline" asChild className="relative">
      <Link href="/cart">
        <BsCart />
        <span className="absolute -top-4 -right-2 z-1 bg-black text-white dark:bg-muted rounded-full h-6 w-6 flex items-center justify-center">
          {randomNumber}
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;
