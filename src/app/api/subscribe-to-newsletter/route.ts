"use server"

import { db } from "@/utils/db"

export async function POST(request: Request, response: Response) {
  const data = await request.json()
  console.log("data:", data)

  if (data.email) {
    await db.user.create({
      data: {
        email: data.email,
      },
    })
  }
  return new Response("OK", { status: 200 })
}
