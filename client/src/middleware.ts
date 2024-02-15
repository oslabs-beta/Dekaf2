import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
// middleware function allows for authentication and re-routing before we reach out endpoint
export function middleware(request: NextRequest) {
  console.log('in middleware')
  // if (request.nextUrl.pathname.startsWith('/login')) {
  //   return NextResponse.rewrite(new URL('/', request.url))
  // }
  //  return NextResponse.rewrite(new URL('/users', request.url))
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/login',
}