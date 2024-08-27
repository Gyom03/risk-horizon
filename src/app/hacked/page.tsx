import React from "react"

import { Button } from "$/lib/components/ui/button"

import Link from "next/link"
import { TriangleAlert } from "lucide-react"
function Page() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-red-600 p-6 text-center text-white">
      <TriangleAlert className="w-24 h-24 text-white mb-10" />
      <h1 className="text-5xl font-bold">
        Sécurité en danger : <br></br> Ordinateur déverrouillé
      </h1>
      <p className="mt-4 text-lg">
        Votre ordinateur est accessible sans authentification.
        <br /> Bien que vous ne soyez pas encore compromis, cette situation expose vos données à des risques potentiels.{" "}
        <br />
        Verrouillez toujours votre poste de travail lorsque vous vous en éloignez.
      </p>

      <Link href="/cybereduque">
        <Button className="mt-6 bg-white text-black hover:bg-gray-300">{`Savoir pourquoi`}</Button>
      </Link>
    </div>
  )
}

export default Page
