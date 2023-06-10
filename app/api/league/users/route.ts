import {NextResponse} from "next/server";
import {db} from "@/lib/db"

export async function POST(request: Request) {
    const res = await request.json()
    await db.player.create({data: {name: res}})
    return NextResponse.json('ok')
}