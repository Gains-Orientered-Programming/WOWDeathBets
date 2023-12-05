import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const headers: Headers = request.headers as Headers; // Type assertion
  const token = headers.get("authorization")?.split(" ")[1];

  if (token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/characters/:region/:realm/:character/bet", "/profile/:path*"],
};
