import { Product } from "@prisma/client";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <>
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => {
          const { image, name, company, description, price, id } = product;

          return (
            <article
              key={id}
              className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-2xl transition-shadow"
            >
              {/* Product Image */}
              <div className="relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>

              {/* Product Content */}
              <div className="p-4">
                {/* Name and Company */}
                <div className="mb-2">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {name}
                  </h2>
                  <p className="text-sm text-gray-500">{company}</p>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm line-clamp-2">
                  {description}
                </p>

                {/* Price */}
                <div className="mt-4">
                  <p className="text-lg font-bold text-gray-900">${price}</p>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 pb-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};
export default ProductsGrid;
