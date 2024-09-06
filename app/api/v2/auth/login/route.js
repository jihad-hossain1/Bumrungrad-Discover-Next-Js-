import { NextResponse } from "next/server";

export async function POST(request) {
    const { email, password } = await request.json();
   try {
    
     if (!email || !password) {
         NextResponse.json({error: "Missing email or password"},{status: 400})
     }
 
 
     return NextResponse.json({message: "Login successful"}, {status: 200})
   } catch (error) {
    return NextResponse.json({error: error.message}, {status: 500})
   }
}