import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Meteors } from "@/components/ui/meteor"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import { LayoutGrid } from "@/components/ui/layout-grid"
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-[#111827]">
      <main className="flex-1">
        <section
          className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48"
          style={{
            backgroundImage: "url('/bg-min.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundBlendMode: "multiply",
            backgroundColor: "rgba(0, 0, 100, 0.4)",
          }}
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_700px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Joignons nos forces pour garantir votre sécurité en ligne.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Notre mission est de rendre le monde numérique plus sûr pour tous, quel que soit leur niveau de connaissance technologique.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/"
                  >
                    Plus d'infos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ce que nous faisons</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Nous proposons une gamme de services pour aider les individus et les organisations à rester en sécurité dans le monde numérique.
              </p>
            </div>
            <div className="flex flex-col space-y-2 min-[400px]:space-y-4 lg:space-y-2 xl:space-y-4">
              <div className="space-y-2">
                <h3 className="font-bold tracking-tight">Formation en Cybersécurité</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Nous enseignons les meilleures pratiques pour rester en sécurité en ligne.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold tracking-tight">Consultation en Sécurité</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Laissez nos experts évaluer et améliorer votre posture de sécurité.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold tracking-tight">Analyse des Menaces</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Soyez préparé aux menaces cybernétiques grâce à notre analyse minutieuse.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold tracking-tight">Protection des Données</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                Apprenez à protéger vos données des regards indiscrets.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2 text-gray-50">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Our Impact</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                We are making a difference by raising awareness and providing the tools to stay safe.
              </p>
            </div>
          </div>
          <div className="h-screen py-20 w-full">
            <LayoutGrid cards={cards} />
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2 text-gray-50">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Qui sommes nous ?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Découvrez l'équipe qui se cache derrière notre mission de sécurisation du monde numérique.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="John Doe"
                  className="rounded-full"
                  height={150}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width={150}
                />
                <div className="mt-2 text-center">
                  <h3 className="font-semibold text-gray-50">Rosin Guillaume</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Président de l'ASBL</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="Jane Smith"
                  className="rounded-full"
                  height={150}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width={150}
                />
                <div className="mt-2 text-center">
                  <h3 className="font-semibold text-gray-50">Richard Guillaume</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Co-Président de l'ASBL</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="Bob Johnson"
                  className="rounded-full"
                  height={150}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width={150}
                />
                <div className="mt-2 text-center">
                  <h3 className="font-semibold text-gray-50">Alicia Bijnen</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Secrétaire</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <img
                  alt="Sarah Lee"
                  className="rounded-full"
                  height={150}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "150/150",
                    objectFit: "cover",
                  }}
                  width={150}
                />
                <div className="mt-2 text-center">
                  <h3 className="font-semibold text-gray-50">Julien Legros</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Community Manager</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Contactez nous</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              N'hésitez pas à nous contacter pour en savoir plus sur nos programmes et services.
              </p>
            </div>
            <div className="mx-auto w-full max-w-[400px] space-y-4">
              <form className="grid gap-4">
                <Input placeholder="Nom" type="text" />
                <Input placeholder="Email" type="email" />
                <Input placeholder="Sujet" type="text" />
                <Textarea placeholder="Ton Message" />
                <Button type="submit">Soumettre</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of
        city life.
      </p>
    </div>
  )
}

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a unique living experience. It&apos;s a
        place where the sky meets home, and tranquility is a way of life.
      </p>
    </div>
  )
}
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the perfect place to relax, unwind, and enjoy
        life.
      </p>
    </div>
  )
}
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the perfect place to relax, unwind, and
        enjoy life.
      </p>
    </div>
  )
}
