import { Button } from "../ui/button";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <span className="text-2xl md:text-3xl uppercase font-bold">Nexify</span>
      </Link>
    </>
  );
};
export default Logo;
