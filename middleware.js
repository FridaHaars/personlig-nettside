import { NextResponse } from 'next/server';

export function middleware(request) {
  const maintenanceMode = true; // Set this to false to disable maintenance mode

  if (maintenanceMode) {
    return NextResponse.redirect('/maintenance');
  }

  return NextResponse.next();
}
