import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
    "/hero-vid.mp4",
    "/fonts/MADE%20Outer%20Sans%20Black%20PERSONAL%20USE.otf",
    "/fonts/MADE%20Outer%20Sans%20Outline%20Alt%20Black%20PERSONAL%20USE.otf",
    "/fonts/MADE%20Outer%20Sans%20Alt%20Black%20PERSONAL%20USE.otf",
    "/favicon.ico",
  ],
  ignoredRoutes: [
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
    "/hero-vid.mp4",
    "/fonts/MADE%20Outer%20Sans%20Black%20PERSONAL%20USE.otf",
    "/fonts/MADE%20Outer%20Sans%20Outline%20Alt%20Black%20PERSONAL%20USE.otf",
    "/fonts/MADE%20Outer%20Sans%20Alt%20Black%20PERSONAL%20USE.otf",
    "/favicon.ico",
  ],
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
