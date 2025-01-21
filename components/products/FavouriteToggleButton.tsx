import { Button } from "../ui/button";
import { Heart } from "lucide-react";

const FavouriteToggleButton = () => {
  return (
    <>
      <Button className="absolute right-8 top-6 " variant="outline" size="icon">
        <Heart />
      </Button>
    </>
  );
};
export default FavouriteToggleButton;
