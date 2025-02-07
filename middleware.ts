import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// we provide some public routes the users can access
const isPublicRoute = createRouteMatcher(["/", "/products(.*)", "/about"]);

// we want to restrict the admin access for the normal users
const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

// we setup the middleware in a way that if the req contains any other route than public , then its being protected by auth.protect() method
export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) await auth.protect();

  // check to see if the user is admin
  const isAdminUser = (await auth()).userId === process.env.ADMIN_USER_ID;

  // if the user is not an admin and tries to access the admin route, then we redirect the user to the
  if (!isAdminUser && isAdminRoute(req)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
