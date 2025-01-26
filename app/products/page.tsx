// since it is a server components, we get the access of the params by default as a prop in this page(products page in this case) component

const ProductsPage = async ({
  searchParams,
}: {
  // also when we manually go to the products page, we dont have any layout, thats why the default view would be grid, so we make the loyout property optional
  searchParams: {
    layout?: string;

    // same with the search term, if we go manually to the products page then there wont have a search term in the url so we make this optional as well
    search?: string;
  };
}) => {
  // the dynamic apis are now asynchronous so we need to wait for the searchParams

  // if I dont put await infront of the searchParams, I get a server warning: "Error: Route "/products" used `searchParams.search`. `searchParams` should be awaited before using its properties."

  // so as suggested by the docs, we put await keyword in front of the searchParams
  // need to check this page https://nextjs.org/docs/messages/sync-dynamic-apis

  const { search = "", layout = "grid" } = await searchParams;

  return (
    <>
      <h1>Products Page</h1>
    </>
  );
};
export default ProductsPage;
