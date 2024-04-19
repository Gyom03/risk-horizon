"use client"
import React from "react"
import Image from "next/image"
import Masonry from "react-smart-masonry"
import { useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

function Page() {
  const [open, setOpen] = useState(false)

  return (
    <div className="pt-8 flex flex-col min-h-[100dvh] bg-[#111827] items-center">
      <div className="text-white max-w-5xl blog-section">
        <div className="p-8 mt-12 w-full">
          <div className="mb-4">
            <h2 className=" text-2xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none ">
              Lundi 31 février 2024
            </h2>
            <p>Haute école en Hainaut - Mons</p>
          </div>

          <p className="mb-8">
            {
              "Dans une récente collaboration avec une entreprise soucieuse de renforcer sa cybersécurité, notre ASBL a dispensé une formation intensive à son équipe. De la création de mots de passe robustes à la détection des tentatives de phishing, nos experts ont couvert une gamme étendue de sujets cruciaux. L'engagement et l'enthousiasme manifestés par les participants témoignent de l'importance croissante accordée à la protection des données numériques. Cette collaboration illustre notre engagement à créer un changement culturel et à renforcer la résilience numérique de notre société, un pas de plus vers un environnement en ligne plus sûr pour tous."
            }
          </p>

          <Masonry columns={3} gap={20}>
            <Image
              alt="Image"
              height={250}
              src="/imgs/1.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/2.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/3.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/4.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
          </Masonry>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: "/imgs/1.jpg" }, { src: "/imgs/2.jpg" }, { src: "/imgs/3.jpg" }]}
            index={0}
          />
        </div>
        <div className="p-8 mt-12 w-full">
          <div className="mb-4">
            <h2 className=" text-2xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none ">
              Lundi 31 février 2024
            </h2>
            <p>Haute école en Hainaut - Mons</p>
          </div>

          <p className="mb-8">
            {
              "Dans le cadre d'un événement de pentesting récent, notre ASBL a organisé une formation intensive pour une entreprise désireuse d'évaluer la robustesse de ses systèmes informatiques. De la découverte des vulnérabilités à la recommandation de mesures correctives, nos experts ont guidé l'équipe à travers les étapes essentielles de la sécurité informatique. L'enthousiasme des participants et leur volonté d'apprendre témoignent de l'importance croissante accordée à la protection des données sensibles. Cette collaboration souligne notre engagement à renforcer la posture de sécurité numérique des entreprises, contribuant ainsi à un paysage en ligne plus résilient et mieux protégé."
            }
          </p>

          <Masonry columns={3} gap={20}>
            <Image
              alt="Image"
              height={250}
              src="/imgs/5.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/6.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/7.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
          </Masonry>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: "/imgs/5.jpg" }, { src: "/imgs/6.jpg" }, { src: "/imgs/7.jpg" }]}
            index={0}
          />
        </div>
        <div className="p-8 mt-12 w-full">
          <div className="mb-4">
            <h2 className=" text-2xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none ">
              Lundi 31 février 2024
            </h2>
            <p>Haute école en Hainaut - Mons</p>
          </div>

          <p className="mb-8">
            {
              "Dans une récente collaboration avec une entreprise soucieuse de renforcer sa cybersécurité, notre ASBL a dispensé une formation intensive à son équipe. De la création de mots de passe robustes à la détection des tentatives de phishing, nos experts ont couvert une gamme étendue de sujets cruciaux. L'engagement et l'enthousiasme manifestés par les participants témoignent de l'importance croissante accordée à la protection des données numériques. Cette collaboration illustre notre engagement à créer un changement culturel et à renforcer la résilience numérique de notre société, un pas de plus vers un environnement en ligne plus sûr pour tous."
            }
          </p>

          <Masonry columns={3} gap={20}>
            <Image
              alt="Image"
              height={250}
              src="/imgs/1.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/2.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/3.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/4.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
            <Image
              alt="Image"
              height={250}
              src="/imgs/5.jpg"
              width={300}
              className="cursor-pointer"
              onClick={() => {
                setOpen(true)
              }}
            />
          </Masonry>
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: "/imgs/1.jpg" }, { src: "/imgs/2.jpg" }, { src: "/imgs/3.jpg" }]}
            index={0}
          />
        </div>
      </div>
    </div>
  )
}

export default Page
