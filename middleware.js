import { NextResponse } from 'next/server';

export function middleware(request) {
  const maintenanceMode = true; // enable/disable maintenance mode

  // console.log('Middleware triggered');
  // console.log('Current Path:', request.nextUrl.pathname);

  // prevent redirect loop
  if (maintenanceMode && !request.nextUrl.pathname.startsWith('/maintenance')) {
    //console.log('Redirecting to maintenance page');
    return NextResponse.redirect(new URL('/maintenance', request.url));
  }

  return NextResponse.next();
}
