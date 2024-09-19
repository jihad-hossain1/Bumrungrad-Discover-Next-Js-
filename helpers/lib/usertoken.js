"use server";

import { newSession } from "./session";

export async function userTokenSet(token) {
    const set_session = await newSession(token);

    if (set_session) {
        return { success: "success" };
    } else {
        return { error: "error" };
    }
}
