import { Button } from "$/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

import { Shield, Users, Brain, ArrowRight, Github, Twitter, Linkedin } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:pt-64">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Protégez votre entreprise des
                <br /> menaces numériques
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Apprenez à reconnaître et à prévenir les cybermenaces avec nos programmes de formation en cybersécurité.
              </p>
            </div>
            <div className="space-x-4">
              <Button>Get Started</Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Notre façon de faire</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Formation pour tous</CardTitle>
              </CardHeader>
              <CardContent>
                <Users className="h-12 w-12 mb-4" />
                <p>Nous visons un public large afin de rendre accessible la sécurité en ligne</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Flexible en fonction de vos besoins</CardTitle>
              </CardHeader>
              <CardContent>
                <Shield className="h-12 w-12 mb-4" />
                <p>Nous adaptons le temps et le niveau de la formation en fonction de vos demandes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Intérractivité</CardTitle>
              </CardHeader>
              <CardContent>
                <Brain className="h-12 w-12 mb-4" />
                <p>Nous prenons soins de rendre nos formations interactives afin de gamifier l'expérience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Secure Your Business?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Contact us today to learn how our cybersecurity training can protect your company.
              </p>
            </div>
            <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
