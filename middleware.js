import { NextResponse } from 'next/server';
export function middleware(request) {
  const maintenanceMode = true; // enable/disable maintenance mode

  // prevent redirect loop
  if (maintenanceMode && !request.nextUrl.pathname.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}