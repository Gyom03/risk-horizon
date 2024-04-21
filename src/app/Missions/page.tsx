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
          <div className="mb-8">
            <h2 className=" text-2xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none ">Lundi 25 mars 2024</h2>
            <p>Haute école en Hainaut - Mons</p>
          </div>

          <p className="mb-10">
            {
              " Dans le cadre d'une récente collaboration, notre ASBL s'est associée à la Haute Ecole en Hainaut pour améliorer la cybersécurité. Nous avons organisé une formation pour les élèves de première année en informatique, visant à les sensibiliser aux risques informatiques et à leur fournir des conseils pour se protéger, ainsi que leurs proches. De la création de mots de passe robustes à la sensibilisation aux outils de hacking, nos experts ont abordé une variété de sujets cruciaux. L'enthousiasme et l'engagement démontrés par les étudiants reflètent l'importance croissante accordée à la protection des données numériques. Cette collaboration illustre notre détermination à instaurer un changement culturel et à renforcer la résilience numérique de notre société, un pas de plus vers un environnement en ligne plus sûr pour tous."
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
          <div className="mb-8">
            <h2 className=" text-2xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none ">
              Vendredi 22 mars 2024
            </h2>
            <p>Domicile de Claudette - Bruxelles</p>
          </div>

          <p className="mb-8">
            {
              "Nous avons récemment apporté notre aide à Claudette, une personne âgée de 81 ans, qui a été victime d'un piratage de son compte Facebook et de sa boîte mail. Nous avons agi rapidement pour sécuriser ses données privées, en changeant ses mots de passe et en renforçant la sécurité de ses comptes. Cette intervention souligne que les personnes âgées ne sont pas à l'abri des risques de cyberattaques et met en lumière l'importance de sensibiliser et de protéger tous les individus, quel que soit leur âge, contre ces menaces en ligne."
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
          <div className="mb-10">
            <h2 className=" text-2xl font-bold tracking-tighter sm:text-3xl xl:text-3xl/none ">
              Vendredi 20 Avril 2024
            </h2>
            <p>ASBL HOPE HOPE - Mons</p>
          </div>

          <p className="mb-10">
            {
              "En collaboration avec l'ASBL HOPE de Romain Lienard, nous avons lancé une initiative innovante visant à sensibiliser les jeunes aux risques informatiques à travers des jeux de parcours et des activités ludiques. Notre objectif est d'accompagner les jeunes dans l'acquisition de compétences en cybersécurité dès leur plus jeune âge, afin de les préparer à se protéger contre les cyberattaques à l'avenir. Ensemble, protégeons nos jeunes en leur fournissant les outils et les connaissances nécessaires pour naviguer en toute sécurité dans le monde numérique en constante évolution."
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
