import { currentUser } from "@clerk/nextjs/server";
import { LuUser } from "react-icons/lu";

const UserIcon = async () => {
  const user = await currentUser();

  const profileImage = user?.imageUrl;

  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="user profile image"
        className="w-7 h-7 rounded-full object-cover"
      />
    );
  }
  return (
    // because react icons uses  props to adjust the height and width, I had to use "!" before the utility classes so that it overrides its default size
    <LuUser className="!h-7 !w-7 p-1 object-cover rounded-full bg-primary text-white" />
  );
};
export default UserIcon;
