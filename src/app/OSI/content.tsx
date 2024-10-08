"use client"
import { Button } from "$/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "$/components/ui/avatar"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "$/components/ui/card"
import { ClockIcon } from "lucide-react"
import Countdown from "react-countdown"

const speakers = [
  {
    name: "Alexandre ZANNI",
    role: "Hackeur éthique et contributeur FLOSS",
    image: "/imgs/osi/person/5.jpg",
    bio: "Alexandre est Ingénieur en test d'intrusion, mais aussi un contributeur prolifique à de nombreux projets open-source liés à la cybersécurité (BlackArch, RubyFu, etc..).",
    linkedin: "https://www.linkedin.com/in/alexandre-zanni/",
  },
  {
    name: "Kevin CHEVREUIL",
    role: "Fondateur de Kaisen Linux",
    image: "/imgs/osi/person/2.jpg",
    bio: "Habitué des systèmes d'exploitation libres et open source, Kevin CHEVREUIL est le fondateur de Kaisen Linux, un outil de sécurité informatique basé sur Debian. ",
    linkedin: "https://www.linkedin.com/in/kevinchevreuil/",
  },
  {
    name: "Laurent MINNE",
    role: "Senior Cyber Security Engineer",
    image: "/imgs/osi/person/3.jpg",
    bio: "Fondateur de Guardians of Cyber, un groupe d'hackeur éthique, Laurent Minne est une figure de la cybersécurité sur Linkedin notamment grâce à ses publications autour de la cybersecurité.",
    linkedin: "https://www.linkedin.com/in/laurent-minne/",
  },
  {
    name: "Jordan Saint-Ghislain",
    role: "Cybersecurity Incident Response Manager",
    image: "/imgs/osi/person/4.jpg",
    bio: "Spécialiste des réponses au incidents de sécurité, Jordan Saint-Ghislain a pu notamment aider à la remise en fonction du CHwapi après une attaque de ransomware.",
    linkedin: "https://www.linkedin.com/in/jordan-saint-ghislain/",
  },
]
const schedule = [
  { time: "10h00 - 11h00", event: " Accueil des Participants." },
  {
    time: "11h00 - 12h00",
    event:
      "1er conférence : Table de discussion sur l’open source et ses défis.",
  },
  {
    time: "12h00 - 14h00",
    event: "Pause : Bar ouvert et restauration.",
  },
  {
    time: "14h00 - 15h00",
    event:
      "2ème conférence : Intervention de prévention aux attaques par ransomware.",
  },
  { time: "17h00 - 18h00", event: "Fin du salon." },
]

function Content() {
  const [countdown, setCountdown] = useState<JSX.Element>()
  useEffect(() => {
    setCountdown(
      <Countdown
        date={new Date("2024-10-19T10:00:00")}
        className="  text-4xl text-white font-bold bg-black/50 p-2"
      />
    )
  }, [])

  return (
    <div className="flex  min-h-[100dvh] mt-16 bg-riskbg">
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
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className=" px-4 md:px-6">
              <div className=" gap-6 max-w-xl">
                <div className="flex flex-col justify-center space-y-4 bg-black/60 p-10 rounded-2xl">
                  <div className="space-y-2">
                    <div className="flex">
                      <img
                        src="imgs/osi/logo_OSI_white.png"
                        alt="OSI logo"
                        className="object-cover w-64"
                      />
                    </div>

                    <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
                      19 octobre 2024 | Mons, Belgique
                    </p>
                    <p className="max-w-[600px] !mt-6 text-white md:text-lg drop-shadow-lg ">
                      Cette année, Risk Horizon organise le salon Open Source
                      Immersion (OSI) dédié à la promotion de logiciels libres
                      et open source.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row !mt-6">
                    <Link
                      className=" shadow-inner inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black  transition-colors hover:bg-gray-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                      href="#info"
                    >
                      {"Plus d'infos"}
                    </Link>

                    <Link
                      href={
                        "https://www.eventbrite.be/e/open-source-immersion-tickets-921737229867"
                      }
                      className=""
                    >
                      <Button className="bg-[#050537]">{"S'inscrire"}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[240px] mt-20 md:mt-0 ">{countdown}</div>
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
                Un salon pour les passionnés de logiciels <br /> libres et open
                source
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
                Au programme : conférences et exposants
              </p>
              <p className="max-w-[600px] mt-2 text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-md/relaxed dark:text-gray-400">
                {
                  "Au programme de cette journée exceptionnelle, vous pourrez assister à des conférences passionnantes et participer à diverses activités. En outre, des exposants seront présents pour vous présenter leurs projets open source innovants. Ne manquez pas cette occasion unique de découvrir les tendances actuelles et de rencontrer des experts du domaine."
                }
              </p>
            </div>
          </div>
        </section>
        <section className="mb-16 mx-32 mt-12 ">
          <h3 className="text-3xl  font-bold tracking-tighter md:text-4xl/tight text-center mb-10 text-white pt-5">
            Nos intervenants :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {speakers.map((speaker, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader className="text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 !rounded-full roundedpls">
                    <AvatarImage
                      src={speaker.image}
                      alt={speaker.name}
                      className="hover:scale-110 duration-300"
                    />
                    <AvatarFallback>
                      {speaker.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle>{speaker.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {speaker.role}
                  </p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground">{speaker.bio}</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button className="bg-[#0e76a8] hover:bg-[#0d5080]">
                    <Link href={speaker.linkedin}>{"Linkedin"}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
        <section className="mb-12 mx-4">
          <h3 className="text-3xl  font-bold tracking-tighter md:text-4xl/tight text-center mb-10 text-white pt-5">
            Programme de la journée :
          </h3>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-0 !rounded-lg">
              <table className="w-full !rounded-lg">
                <thead className="bg-muted !rounded-lg">
                  <tr>
                    <th className="px-4 py-2 text-left">Time</th>
                    <th className="px-4 py-2 text-left">Event</th>
                  </tr>
                </thead>
                <tbody>
                  {schedule.map((item, index) => (
                    <tr key={index} className="border-t border-muted">
                      <td className="px-4 py-2 flex items-center">
                        <ClockIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                        {item.time}
                      </td>
                      <td className="px-4 py-2">{item.event}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </section>

        <section className="bg-muted mt-20 pb-5 md:pb-0">
          <div>
            <h3 className="text-3xl text-black font-bold tracking-tighter md:text-4xl/tight text-center pt-5">
              Nos partenaires majeurs :
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-0 md:gap-14">
              <div className="w-[200px] md:w-[300px] aspect-video md:aspect-square flex justify-center items-center hover:scale-110 duration-500 scale-[1.1] md:scale-[1]">
                <Link href={"https://www.heh.be/"}>
                  <Image
                    alt="Image"
                    className="object-contain aspect-video md:aspect-square scale-[1] "
                    height={300}
                    src="/imgs/osi/logo/HEH.png"
                    width={300}
                  />
                </Link>
              </div>

              <div className="w-[200px] md:w-[300px] aspect-video md:aspect-square flex justify-center items-center hover:scale-110 duration-500 scale-[1.1] md:scale-[1]">
                <Link href={"https://www.nrj.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-contain  aspect-video md:aspect-square scale-[0.9] md:scale-[0.65] "
                    height={300}
                    src="/imgs/osi/logo/NRJ.png"
                    width={300}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" pt-5 ">
          <div>
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight text-center mb-10 mt-8">
              Nos partenaires :
            </p>
            <div className="flex flex-wrap  justify-center items-center gap-0 md:gap-14">
              <div className="mx-10 md:mx-0 w-[200px] md:w-[300px] aspect-video md:aspect-square flex justify-center items-center ">
                <Link href={"https://www.zebrathrust.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500"
                    height={400}
                    src="/imgs/osi/logo/zebra2.png"
                    width={400}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://www.bhc.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500"
                    height={160}
                    src="/imgs/osi/logo/bhc_BLANC.png"
                    width={200}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://ict.evergroup.be/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500"
                    height={200}
                    src="/imgs/osi/logo/Evergroup.png"
                    width={200}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://exegol.readthedocs.io/en/latest/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 scale-[0.9] md:scale-[1]"
                    height={300}
                    src="/imgs/osi/logo/exegol.png"
                    width={300}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap  justify-center items-center gap-0 md:gap-14">
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://easi.net/fr"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 "
                    height={160}
                    src="/imgs/osi/logo/easi.png"
                    width={300}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://kasfaleia.com"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 "
                    height={160}
                    src="/imgs/osi/logo/kasfaleia.png"
                    width={300}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://akcustom.be"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 "
                    height={160}
                    src="/imgs/osi/logo/akcustom.webp"
                    width={300}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[150px] md:w-[200px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://chimay.com/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 "
                    height={150}
                    src="/imgs/osi/logo/chimay.png"
                    width={150}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[150px] md:w-[200px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://jeci.fr/fr/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 "
                    height={200}
                    src="/imgs/osi/logo/jeci.png"
                    width={200}
                  />
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap  justify-center items-center gap-0 md:gap-14">
              <div className="mx-10 md:mx-0 w-[150px] md:w-[200px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://www.beezim.fr/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 "
                    height={150}
                    src="/imgs/osi/logo/beezim.png"
                    width={170}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[150px] md:w-[200px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://intuitem.com/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 "
                    height={150}
                    src="/imgs/osi/logo/intuitem.png"
                    width={150}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://kaisenlinux.org/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 scale-[1.1] md:scale-[1]"
                    height={300}
                    src="/imgs/osi/logo/kaisen.png"
                    width={300}
                  />
                </Link>
              </div>
              <div className="mx-10 md:mx-0 w-[200px] md:w-[250px] aspect-video md:aspect-square flex justify-center items-center">
                <Link href={"https://kaisenlinux.org/"}>
                  <Image
                    alt="Image 1"
                    className="object-cover hover:scale-110 duration-500 "
                    height={200}
                    src="/imgs/osi/logo/beforensic.png"
                    width={200}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20">
          <div className="flex flex-col p-4 bg-[#020222] max-w-[400px] justify-center mx-auto">
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight ">
              Informations :
            </p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400 mb-3">
              19 octobre 2024 - 10H à 18H
            </p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
              8 Avenue Victor Maistriau, 7000 Mons
            </p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
              Haute École en Hainaut,
            </p>
            <p className="max-w-[600px] text-white md:text-xl dark:text-gray-400">
              Département sciences et technologies
            </p>
            <Link
              href={
                "https://www.eventbrite.be/e/open-source-immersion-tickets-921737229867"
              }
              className="mx-auto"
            >
              <Button className="mt-6 mx-auto p-6 text-xl bg-white hover:bg-gray-400 text-black">
                {"S'inscrire"}
              </Button>
            </Link>
          </div>
        </section>
        <section className="bg-[#020222] mt-20">
          <div>
            <p className="text-3xl text-white font-bold tracking-tighter md:text-4xl/tight text-center pt-5">
              Vous souhaitez venir exposer / devenir sponsor ?
            </p>
            <div className="flex flex-col md:flex-row py-5 md:justify-center gap-4">
              <div className="flex  justify-center items-center gap-14  text-white text-xl text-nowrap py-2">
                Contact :
              </div>
              <div className="flex justify-center items-center gap-14  text-white text-xl text-nowrap">
                guillaume.rosin@risk-horizon.be
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Content
