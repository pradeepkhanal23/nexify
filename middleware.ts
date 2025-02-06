import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// we provide some public routes the users can access
const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);

// we setup the middleware in a way that if the req contains any other route than public , then its being protected by auth.protect() method
export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
