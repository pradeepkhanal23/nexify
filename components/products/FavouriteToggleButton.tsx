import { Button } from "../ui/button";
import { Heart } from "lucide-react";

const FavouriteToggleButton = () => {
  return (
    <>
      <Button variant="outline" size="icon">
        <Heart />
      </Button>
    </>
  );
};
export default FavouriteToggleButton;
