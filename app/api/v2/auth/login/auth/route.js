import { get_server_session } from "../../../../../../helpers/lib/server_session";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const session = await get_server_session();

    return NextResponse.json(session);
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}