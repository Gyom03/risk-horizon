import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { MailboxIcon } from "lucide-react"

function Page() {
  return (
    <div className="dark min-h-[calc(100dvh-7rem)] bg-[#061322]">
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 border-t ">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3 text-gray-50">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                You want to secure your company ?
              </h2>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contact Us !</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Reach out to learn more about our programs and services.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[400px] space-y-4">
              <form className="grid gap-4">
                <Input placeholder="Name" type="text" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Subject" type="text" />
                <Textarea placeholder="Your Message" />
                <Button type="submit">Send</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page
