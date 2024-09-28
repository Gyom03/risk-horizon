import { Button } from "$/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "$/components/ui/card"
import { Code, Download, Shield, Zap } from "lucide-react"
import Link from "next/link"
import React from "react"

function Page() {
  return (
    <div className="flex flex-col min-h-screen mt-24">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 mb-24 ">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none mb-8 text-center">
              Nos services de cybersécurité
            </h1>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Blue Team Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Configuration de réseaux sécurisés</li>
                    <li>Installation d'Anti-virus / EDR</li>
                    <li>Système de détection d'intrusion</li>
                    <li>Installation de matériels informatique</li>
                    <li>Analyse de risque</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-6 w-6 mr-2" />
                    Red Team Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Formation de sensibilisation/prévention</li>
                    <li>Audit de sécurité</li>
                    <li>{"Test d’intrusion"}</li>
                    <li>Intervention curative</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-6 w-6 mr-2" />
                    Development Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Développement de Site Web</li>
                    <li>{"Programmation d’application"}</li>
                    <li>Installation Cloud Privé</li>
                    <li>Gestion de base de données</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-riskbg">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Besoin de support immédiat ?
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Téléchargez TeamViewer QuickSupport pour obtenir une assistance.
              </p>
              <Link href={"https://download.teamviewer.com/download/TeamViewerQS_x64.exe"} target="_blank">
                <Button className="!bg-white !text-black inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  <Download className="mr-2 h-4 w-4" />
                  Download TeamViewer QuickSupport
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Page
