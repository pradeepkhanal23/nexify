import { auth } from "@clerk/nextjs/server";
import { CardSignInButton } from "../form/ActionButtons";
import { fetchFavoriteId } from "@/utils/actions";
import FavoriteToggleForm from "./FavoriteToggleForm";

const FavouriteToggleButton = async ({ productId }: { productId: string }) => {
  const { userId } = await auth();

  if (!userId) return <CardSignInButton />;

  const favoriteId = await fetchFavoriteId({ productId });
  return (
    <>
      <FavoriteToggleForm favoriteId={favoriteId} productId={productId} />
    </>
  );
};
export default FavouriteToggleButton;
