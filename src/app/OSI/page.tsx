import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

function page() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-riskbg">
      <main className="flex-1">
        <section
          className="w-full py-6 sm:py-12 md:py-24 lg:py-28 xl:py-32"
          style={{
            backgroundImage: "url('imgs/osi/visu_horizontal_sanslogo2.jpg')",
            /*   background:
              "linear-gradient(to right, rgba(255, 22, 22, 0.9), rgba(6, 9, 155, 0.5)), url('imgs/osi/foule.webp')", */
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4 bg-black/60 p-10 rounded-2xl">
                <div className="space-y-2">
                  <div className="flex">
                    <img src="imgs/osi/logo_OSI_white.png" alt="OSI logo" className="object-cover w-64" />
                  </div>

                  <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
                    19 octobre 2024 | Mons, Belgique
                  </p>
                  <p className="max-w-[600px] !mt-6 text-white md:text-lg drop-shadow-lg ">
                    Cette année, Risk Horizon organise le salon Open Source Immersion (OSI) dédié à la promotion de
                    logiciels libres et open source.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row !mt-6">
                  <Link
                    className=" shadow-inner inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black  transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#info"
                  >
                    {"Plus d'infos"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="info" className="py-5 pt-10">
          <div className="flex flex-col md:flex-row py-5 justify-center items-center gap-10">
            <div>
              <Image
                loading="lazy"
                alt="Image 1"
                className="w-full  object-cover rounded-lg h-[200px] md:h-[250px]"
                height={500}
                src="/imgs/osi/foule.webp"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="px-4">
              <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">
                Un salon pour les passionnés de logiciels <br /> libres et open source
              </p>
              <p className="max-w-[600px] mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                {
                  "Le 19 octobre 2024, Risk Horizon vous invite à son salon Open Source Immersion, un événement où vous pourrez découvrir des projets innovants et échanger avec leurs créateurs ainsi que la communauté contributrice.                  "
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse py-5 justify-center items-center gap-10">
            <div>
              <Image
                loading="lazy"
                alt="Image 1"
                className="w-full object-cover rounded-lg h-[200px] md:h-[250px]"
                height={500}
                src="/imgs/9.jpg"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="px-4">
              <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">
                Première édition, axé cybersécurité
              </p>
              <p className="max-w-[600px] mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                {
                  "Pour cette première édition, nous mettrons l'accent sur la sécurité des infrastructures. Venez découvrir les nouvelles technologies en matière de sécurité."
                }
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row py-5 justify-center items-center gap-10">
            <div>
              <Image
                loading="lazy"
                alt="Image 1"
                className="w-full object-cover rounded-lg h-[200px] md:h-[250px]"
                height={500}
                src="/imgs/osi/conf.jpg"
                style={{
                  aspectRatio: "600/300",
                  objectFit: "cover",
                }}
                width={600}
              />
            </div>
            <div className="px-4">
              <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">
                Au programme : conférences et ateliers
              </p>
              <p className="max-w-[600px] mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                {
                  "Au programme de cette journée, des conférences et des ateliers seront organisés pour vous permettre de découvrir les dernières technologies et pratiques en matière de cybersécurité."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="py-5 ">
          <div className="flex flex-col p-4 bg-[#020222] max-w-[400px] justify-center mx-auto">
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">Informations :</p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400 mb-3">19 octobre 2024 - 10H à 18H</p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
              8 Avenue Victor Maistriau, 7000 Mons
            </p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">Haute École en Hainaut,</p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
              Département sciences et technologies
            </p>
            <Link href={"https://www.eventbrite.be/e/open-source-immersion-tickets-921737229867"} className="mx-auto">
              <Button className="mt-6 mx-auto p-6 text-xl bg-white hover:bg-gray-400 text-black">{"S'inscrire"}</Button>
            </Link>
          </div>
        </section>
        <section className="bg-[#020222] mt-6">
          <div>
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight text-center pt-5">
              Nos partenaires :
            </p>
            <div className="flex flex-wrap justify-center items-center gap-14 py-5">
              <div>
                <Link href={"https://ict.evergroup.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover"
                    height={200}
                    src="/imgs/osi/logo/Evergroup.png"
                    width={200}
                  />
                </Link>
              </div>

              <div>
                <Link href={"https://www.heh.be/"}>
                  <Image
                    alt="Image 1ZDZD"
                    className="object-cover "
                    height={200}
                    src="/imgs/osi/logo/HEH.png"
                    width={200}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#020222] ">
          <div>
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight text-center pt-5">
              Participants :
            </p>
            <div className="flex flex-wrap justify-center items-center gap-14 py-5">
              <div>
                <Link href={"https://exegol.readthedocs.io/en/latest/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover "
                    height={160}
                    src="/imgs/osi/logo/exegold.png"
                    width={100}
                  />
                </Link>
              </div>

              <div>
                <Link href={"https://kaisenlinux.org/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover "
                    height={160}
                    src="/imgs/osi/logo/kaisen.png"
                    width={300}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default page
