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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">Contactez nous :</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                {"N'hésitez pas à nous contacter pour en savoir plus sur nos programmes et services."}
              </p>
              <h3 className="!mt-10 !mb-10 text-xl font-bold tracking-tighter md:text-2xl/tight text-[#7c45bf] hover:underline">
                <a href="mailto:info.risk.horizon@gmail.com">info.risk.horizon@gmail.com</a>
              </h3>
              <h3 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">ou</h3>
            </div>
            <div className="mx-auto w-full max-w-[400px] space-y-4">
              <form className="grid gap-4 ">
                <p className="w-full text-start font-bold text-white">Formulaire :</p>
                <Input placeholder="Nom" type="text" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Sujet" type="text" />
                <Textarea placeholder="Votre message" />
                <Button type="submit">Soumettre</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page
