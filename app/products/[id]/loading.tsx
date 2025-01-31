import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      {/* Breadcrumb Skeleton */}
      <Skeleton className="h-4 w-48 mb-6" />

      {/* Product Grid Skeleton */}
      <div className="mt-6 grid gap-8 lg:grid-cols-2 lg:gap-16">
        {/* Image Section Skeleton */}
        <div className="relative h-96 lg:h-auto">
          <Skeleton className="w-full h-full rounded-lg" />
        </div>

        {/* Product Info Section Skeleton */}
        <div className="flex flex-col gap-y-3">
          {/* Product Name and Favourite Button Skeleton */}
          <div className="flex items-center justify-between">
            <Skeleton className="h-8 w-3/4 sm:w-1/2" />
            <Skeleton className="h-8 w-8 rounded-full mr-auto ml-5" />
          </div>

          {/* Product Rating Skeleton */}
          <Skeleton className="h-4 w-24" />

          {/* Company Name Skeleton */}
          <Skeleton className="h-4 w-32" />

          {/* Price Skeleton */}
          <Skeleton className="h-6 w-20" />

          {/* Description Skeleton */}
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />

          {/* Add to Cart Button Skeleton */}
          <Skeleton className="h-10 w-32 mt-4" />
        </div>
      </div>
    </section>
  );
};

export default loading;
