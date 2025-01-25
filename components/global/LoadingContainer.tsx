import { Card, CardContent } from "@/components/ui/card";

const LoadingContainer = () => {
  return (
    <section className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <LoadingCard />
      <LoadingCard />
      <LoadingCard />
    </section>
  );
};

function LoadingCard() {
  return (
    <>
      <Card className="animate-pulse transform group-hover:shadow-xl transition-shadow duration-1500">
        <CardContent className="p-4">
          {/* Image Skeleton */}
          <div className="relative h-64 md:h-48 rounded overflow-hidden bg-muted-foreground">
            <div className="w-full h-full bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
          </div>

          {/* Text Skeletons */}
          <div className="mt-4 text-center">
            {/* Product Name Placeholder */}
            <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-700 mx-auto rounded animate-pulse"></div>
            {/* Company Placeholder */}
            <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 mx-auto mt-2 rounded animate-pulse"></div>
            {/* Price Placeholder */}
            <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-500 mx-auto mt-2 rounded animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
export default LoadingContainer;
