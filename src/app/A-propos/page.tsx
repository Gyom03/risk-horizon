import { LayoutGrid } from "@/components/ui/layout-grid"
import React from "react"

function Page() {
  return (
    <main className="min-h-[calc(100dvh-7rem)] bg-[#061322]">
      <section className="w-full py-12 md:py-24 lg:py-32   ">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-2 text-gray-50">
            <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Acme Cybersecurity</h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Acme Cybersecurity is a mission-driven organization dedicated to protecting individuals and businesses
              from the ever-evolving threats in the digital landscape. Our team of experts is committed to empowering
              our community with the knowledge and tools necessary to navigate the online world safely.
            </p>
          </div>
          <div className="flex flex-col space-y-2 min-[400px]:space-y-4 lg:space-y-2 xl:space-y-4">
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-gray-50">Our Mission</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                To make the digital world a safer place for everyone, regardless of their technical expertise. We
                believe that cybersecurity should be accessible and understandable to all.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-gray-50">Why Cybersecurity Matters</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {`In today's increasingly digital world, the need for robust cybersecurity measures has never been more
              crucial. Cyber threats such as data breaches, malware, and phishing attacks can have devastating
              consequences for individuals and businesses alike. By raising awareness and providing practical solutions,
              we aim to empower our community to stay safe online.`}
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-bold tracking-tight text-gray-50">Our Approach</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                At Acme Cybersecurity, we take a comprehensive approach to protecting our clients. Our services include
                cybersecurity training, security consultations, threat analysis, and data protection solutions. We work
                closely with our clients to understand their unique needs and develop customized strategies to keep them
                safe.
              </p>
            </div>
          </div>
        </div>
        <div className="h-screen py-20 w-full">
          <LayoutGrid cards={cards} />
        </div>
      </section>
    </main>
  )
}

export default Page

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

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1464457312035-3d7d0e0c058e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]
