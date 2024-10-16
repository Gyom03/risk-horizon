import { NextResponse } from "next/server"
import axios from "axios"
import { Resend } from "resend"
import { z } from "zod"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
const schema = z.object({
  id: z.string(),
  text: z.string().min(2),
})

export async function POST(request: Request, response: Response) {
  const { sessionClaims } = auth()
  if (sessionClaims?.metadata.role !== "admin") {
    return new Response("Unauthorized", { status: 401 })
  }

  const postData = await request.json()
  const result = schema.safeParse(postData)

  if (!result.success) return new Response("Invalid data", { status: 400 })
  const { id, text } = result.data
  const test = await db.courses.upsert({
    where: { id: id },
    update: {
      Content: text,
    },
    create: {
      id: id,
      Content: text,
    },
  })

  if (!test) return new Response("Course not found", { status: 404 })

  return NextResponse.json({ message: "Course updated" })
}
