import { LayoutGrid } from "$/components/ui/layout-grid"
import Image from "next/image"
import React from "react"

function Page() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-1">
          <div className="flex flex-col space-y-2 min-[400px]:space-y-4 lg:space-y-2 xl:space-y-4">
            <div className="container mx-auto px-4 py-8 ">
              <h2 className="text-3xl font-bold mb-4">Mentions légales</h2>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Qui est l’éditeur du site ?
                </h3>
                <p>
                  Le site www.risk-horizon.be est édité par l’Association Risk
                  Horizon ASBL, domiciliée Rue de Cuesmes 199, 7012 Flénu dont
                  le numéro d&apos;entreprise est le 1008.675.581.
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Qui est l’hébergeur du site ?
                </h3>
                <p>
                  Le site est hébergé par : Vercel Inc., dont le siège social
                  est situé au 340 S Lemon Ave #4133 Walnut, CA 91789,
                  États-Unis.
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Qui est le directeur de la publication ?
                </h3>
                <p>
                  Monsieur Guillaume RICHARD est le directeur de la publication.
                  Il peut être contacté à l’adresse suivante :
                  guillaume.richard@risk-horizon.be
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Quels sont les droits liés à la propriété intellectuelle ?
                </h3>
                <p>
                  Tous les contenus présents sur ce site, tels que les textes,
                  images, graphiques et logos, sont protégés par des droits
                  d’auteur. Cela signifie que vous ne pouvez pas copier,
                  distribuer, modifier ou utiliser ces éléments sans avoir
                  obtenu une autorisation écrite de Risk Horizon ASBL au
                  préalable.
                </p>
              </section>

              <section className="my-8  space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Le site est-il toujours disponible ?
                </h3>
                <p>
                  Nous faisons de notre mieux pour que notre site soit
                  accessible en permanence. Cependant, il peut arriver que le
                  site soit temporairement indisponible en raison de
                  maintenances techniques, de mises à jour ou de problèmes de
                  réseau.
                </p>
                <p>
                  Quand Risk Horizon ASBL n’est-elle pas responsable de
                  l’utilisation du site ?
                </p>
                <p>
                  Risk Horizon ASBL ne peut pas être tenue responsable des
                  dommages directs ou indirects dans les cas suivants :
                </p>
                <ul className="list-disc	">
                  <li>
                    Si vous accédez ou utilisez ce site et que vous subissez des
                    problèmes ou des pertes.
                  </li>
                  <li>
                    En cas d’interruption de l’accès au site, y compris pendant
                    les maintenances techniques ou les mises à jour.
                  </li>
                  <li>
                    Si les informations sur le site sont inexactes ou
                    incomplètes.
                  </li>
                  <li>
                    Si vous utilisez des liens vers des sites tiers, nous
                    déclinons toute responsabilité pour le contenu de ces sites.
                  </li>
                </ul>
              </section>
              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Quel tribunal est compétent en cas de litige ?
                </h3>
                <p>
                  Si un désaccord survient, nous vous encourageons d’abord à
                  nous contacter par e-mail pour essayer de le résoudre.
                </p>
                <p>
                  Si le litige persiste, l’utilisateur reconnaît que la loi
                  belge s’applique concernant l’utilisation de notre site web.
                  Tout différend sera soumis à la compétence exclusive du
                  tribunal de commerce de Mons.
                </p>
              </section>
              <section className="my-8 space-y-4">
                <p>Date de dernière mise à jour : 3 décembre 2024</p>
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
