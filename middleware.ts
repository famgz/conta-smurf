import { auth } from '@/auth';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/user', '/elojob', '/cart'];

function isRouteProtected(pathname: string) {
  return protectedRoutes.some(
    (protectedRoute) =>
      pathname === protectedRoute || pathname.startsWith(`${protectedRoute}/`)
  );
}

export default auth((req) => {
  const pathname = req.nextUrl.pathname;

  console.log('[middleware]', { pathname, auth: req.auth });

  // redirect login/register if already logged in
  if (req.auth && (pathname.startsWith('/login') || pathname === '/register')) {
    return NextResponse.redirect(new URL('/user', req.nextUrl.origin));
  }

  // redirect dashboard if not logged in
  if (!req.auth && isRouteProtected(pathname)) {
    return NextResponse.redirect(new URL('/login', req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images).*)'],
};
