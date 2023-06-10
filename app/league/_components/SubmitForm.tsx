'use server'

// import {db} from "../../../lib/db"
import {db} from "@/lib/db"

export async function handleSubmit(name: string) {
    console.log(name)
    //await db.player.create({data: {name}})
}