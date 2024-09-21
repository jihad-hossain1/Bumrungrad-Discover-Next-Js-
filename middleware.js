import { NextResponse } from 'next/server';
import { serverAuth } from './helpers/lib/session';

export async function middleware(request) {
    const isAuth = await serverAuth()

    if (isAuth) {
        return NextResponse.next()
    }
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
}

export const config = {
    matcher: [
        '/our-services/appointment',
        '/our-services/visaprocessing',
        '/our-services/telemedicine',
        '/our-services/order-medicine',
        '/our-services/medical-record',
        "/my-profile",
        "/check-up",
    ],
}