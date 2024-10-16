import { NextResponse } from "next/server"
import axios from "axios"
import { Resend } from "resend"
import { z } from "zod"
import { db } from "@/lib/db"
import { auth } from "@clerk/nextjs/server"
interface Elements {
  id: string
  isSelectable: boolean
  name: string
  children?: Elements[]
}

export async function POST(request: Request, response: Response) {
  const { sessionClaims } = auth()
  if (sessionClaims?.metadata.role !== "admin") {
    return new Response("Unauthorized", { status: 401 })
  }

  const postData = await request.json()
  const tojson = JSON.parse(postData.content)

  const oldCourse = await db.coursesLayout.findFirst({
    take: 1,
    orderBy: {
      id: "desc",
    },
  })

  if (oldCourse && JSON.stringify(oldCourse.Content) === JSON.stringify(tojson)) {
    console.log("No changes detected")
    return new Response("No changes detected", { status: 200 })
  }

  const test = await db.coursesLayout.create({
    data: {
      Content: tojson,
    },
  })

  if (!test) return new Response("Course not found", { status: 404 })

  return NextResponse.json({ message: "Course updated" })
}
