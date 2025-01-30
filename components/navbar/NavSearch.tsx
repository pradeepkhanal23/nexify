"use client";
import { Input } from "../ui/input";
import { useState, useEffect } from "react";

// we have this hook "useSearchParams" in client component to access the URL.
// we use searchParams prop to access URL in server component
import { useSearchParams, useRouter } from "next/navigation";

const NavSearch = () => {
  // this searchParams holds the current URL's query parameter
  const searchParams = useSearchParams();

  // this "replace" method from useRouter hook replaces the current URL without adding a new entry to the browser's history
  const { replace } = useRouter();
  // stores the current value of the search input. It is initialized with the value of the search query parameter from the URL (if it exists).
  const [search, setSearch] = useState<string>(
    searchParams.get("search")?.toString() || ""
  );

  const handleSearch = (value: string) => {
    // because the searchParams provided by the useSearchParams are immutable, we pass the "searchParams" to "new URLSearchParams" constructor to create a mutable coply of the searchParams , which we can modidy based on our search
    const params = new URLSearchParams(searchParams);

    // if we have any typed search value, then we add that to our new mutable params
    if (value) {
      params.set("search", value);
    } else {
      // if the value is not there, we dont need the search property , so we delete it
      params.delete("search");
    }

    // this will replace the URL with our new URL
    replace(`/products?${params}`);
  };

  return (
    <div className="w-full">
      <Input
        type="search"
        placeholder="Search the products here..."
        className="dark:bg-muted"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
};
export default NavSearch;
