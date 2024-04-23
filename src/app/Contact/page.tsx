import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { MailboxIcon } from "lucide-react"
import Form from "@/components/form"

function Page() {
  return (
    <div className=" min-h-[calc(100dvh-7rem)]  bg-gray-100">
      <main className="flex-1 ">
        <Form />
      </main>
    </div>
  )
}

export default Page
