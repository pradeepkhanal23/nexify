import { auth } from "@clerk/nextjs/server";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import { navlinks } from "@/utils/navlinks";
import Link from "next/link";
import { Button } from "../ui/button";
import UserIcon from "./UserIcon";
import SignOutLink from "./SignOutButton";
import { SignedOut, SignInButton, SignUpButton, SignedIn } from "@clerk/nextjs";

const LinksDropdown = async () => {
  const { userId } = await auth();

  const isAdmin = userId === process.env.ADMIN_USER_ID;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <LuAlignLeft className="!h-6 !w-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent>
        {/* based on signed In and signed Out , we wanna render different navlink values*/}

        {/* if the user is signed out, we only render the login and register option */}
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left">Register</button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>

        {/* if the user is signed in we provide the other options along with logout*/}
        <SignedIn>
          {navlinks.map((link) => {
            // checking to see if the user is admin so that we can provide the dashboard option for the admin user
            if (link.label === "dashboard" && !isAdmin) return null;

            return (
              <DropdownMenuItem key={link.href}>
                <Link className="capitalize cursor-pointer" href={link.href}>
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator />
          <DropdownMenuItem className="cursor-pointer">
            <SignOutLink />
          </DropdownMenuItem>
        </SignedIn>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default LinksDropdown;
