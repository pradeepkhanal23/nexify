import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <>
      <header className="w-full bg-white dark:bg-black shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800 dark:text-gray-200">
            Nexify
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center justify-center flex-grow mx-4">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full max-w-md"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="lg" className="hidden md:inline-flex">
              <ShoppingCart />
            </Button>
            <Button variant="ghost" className="hidden md:inline-flex">
              Mode
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Profile</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Home</DropdownMenuItem>
                <DropdownMenuItem>About</DropdownMenuItem>
                <DropdownMenuItem>Products</DropdownMenuItem>
                <DropdownMenuItem>Favourites</DropdownMenuItem>
                <DropdownMenuItem>Cart</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};
export default Navbar;
