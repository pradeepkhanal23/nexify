import { Input } from "../ui/input";

const NavSearch = () => {
  return (
    <div className="w-full">
      <Input
        type="search"
        placeholder="Search the products here..."
        className="dark:bg-muted"
      />
    </div>
  );
};
export default NavSearch;
