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
              <h2 className="text-3xl font-bold mb-4">
                Politique de confidentialité du site
              </h2>
              <p>
                Chez Risk Horizon ASBL, nous faisons tout pour protéger vos
                données personnelles. Nous respectons les dispositions du
                Règlement général sur la protection des données (RGPD).
              </p>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Quel est l’objectif de cette politique de confidentialité ?
                </h3>
                <p>
                  Cette politique explique comment nous collectons et utilisons
                  vos données personnelles lorsque vous utilisez notre site web
                  https://www.risk-horizon.be et ses sous-domaines. Elle vous
                  informe également sur la manière dont vos données personnelles
                  sont traitées par Risk Horizon ASBL
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Que signifient les termes utilisées dans notre politique de
                  confidentialité ?
                </h3>
                <h4 className="text-lg underline">
                  Qu’est-ce qu’une donnée personnelle ?
                </h4>
                <p>
                  C’est toute information permettant d’identifier une personne
                  physique, directement ou indirectement comme le nom, prénom,
                  numéro de téléphone, date de naissance, adresse...
                </p>
                <h4 className="text-lg underline">
                  Qu’est-ce qu’un responsable de traitement ?
                </h4>
                <p>
                  C’est la personne ou l’entreprise qui décide pourquoi et
                  comment vos données personnelles sont utilisées.
                </p>
                <h4 className="text-lg underline">
                  Que signifie personne concernée ?
                </h4>
                <p>
                  Il s’agit de vous, la personne dont les données personnelles,
                  sont collectées et traitées via notre site web.
                </p>
                <p className="text-lg underline">
                  Les termes ci-dessus s’appliquent de la même manière au
                  singulier et au pluriel.
                </p>
                <p>
                  Dans cette politique de confidentialité, les termes « nous »,
                  « notre » et « nos » font référence à Risk Horizon ASBL.
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Qui est le responsable de traitement ?
                </h3>
                <p>
                  Risk Horizon ASBL est responsable de traitement de vos données
                  personnelles.
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Quelle est l’adresse postale du responsable de traitement ?
                </h3>
                <p>Risk Horizon ASBL, Rue Cuesmes 199, 7012 MONS.</p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Comment utilisons-nous vos données personnelles ?
                </h3>
                <table className="table-fixed border-collapse border border-slate-500">
                  <thead>
                    <tr>
                      <th>Nom du traitement</th>
                      <th>
                        Pourquoi utilisons nous vos données personnelles ?
                      </th>
                      <th>
                        Quelles sont les données personnelles que nous
                        collectons ?
                      </th>
                      <th>Sur quelle base légale ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Formulaire de contact du site (contact, diagnostic,
                        partenariat)
                      </td>
                      <td>
                        Pour gérer vos demandes et vous fournir les informations
                      </td>
                      <td>Nom, prénom, email, message envoyé</td>
                      <td>
                        Votre consentement ou pour exécuter un contrat ou des
                        démarches avant de conclure un contrat
                      </td>
                    </tr>
                    <tr>
                      <td>Gestion des demandes des exercices de droits</td>
                      <td>
                        Accuser réception des demandes Demander des informations
                        supplémentaires si besoin
                      </td>
                      <td>
                        Nom, prénom, email, type de demande, copie de documents
                        d’identité
                      </td>
                      <td>Respect de nos obligations légales</td>
                    </tr>
                    <tr>
                      <td>
                        Organisation d’événements (participation au Salon OSI)
                      </td>
                      <td>
                        Répondre à la personne concernée Communiquer en interne
                        avec le service en charge du traitement pour rendre la
                        demande effective Documenter la demande Gestion de
                        l’organisation :
                        <ul>
                          <li>- envoi d’invitations</li>
                          <li>- suivi des inscriptions </li>
                          <li>- suivi de la satisfaction</li>
                          <li>
                            - gestion des questions et demandes formulées au
                            cours des événements
                          </li>
                        </ul>
                      </td>
                      <td>Nom, prénom, email, numéro de téléphone</td>
                      <td>Intérêt légitime</td>
                    </tr>
                    <tr>
                      <td>Gestion de la prospection</td>
                      <td>
                        Prise de contact avec les prospects pour proposer les
                        services de Risk Horizon ASBL
                      </td>
                      <td>Nom, prénom, email, numéro de téléphone</td>
                      <td>Intérêt légitime</td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Lorsque nous vous demandons des données personnelles, nous
                  précisons si elles sont obligatoires ou facultatives au moment
                  de la collecte. Cette indication est marquée par un astérisque
                  (*). Si vous ne complétez pas un champ obligatoire, cela
                  pourrait empêcher le traitement de votre demande. A qui sont
                  transmises vos données personnelles ?
                </p>
                <p>
                  Risk Horizon ASBL peut partager vos données personnelles avec
                  des tiers dans les situations suivantes :
                </p>
                <table className="table-fixed border-collapse border border-slate-500 mx-auto">
                  <thead>
                    <tr>
                      <th>Finalités de traitement</th>
                      <th>Durée de conservation</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Gestion des demandes de contact</td>
                      <td>5 ans à partir du traitement de la demande</td>
                    </tr>
                    <tr>
                      <td>Gestion des droits des personnes</td>
                      <td>
                        Pendant l’année de la demande, plus 5 ans
                        supplémentaires.
                        <br /> Les documents d’identité seront supprimées au
                        maximum 1 an
                        <br /> après réception de la demande.
                      </td>
                    </tr>
                    <tr>
                      <td>Organisation d’événement</td>
                      <td>
                        3 ans à partir du dernier contact en bas active puis
                        archivées à titre probatoire pendant 5 ans
                      </td>
                    </tr>
                    <tr>
                      <td>Gestion de la prospection</td>
                      <td>
                        3 ans à partir du dernier contact en bas active puis
                        archivées à titre probatoire pendant 5 ans
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Après ces périodes de conservation, vos données personnelles
                  seront soit supprimées, soit anonymisées.
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Quels sont vos droits concernant vos données personnelles ?
                </h3>
                <p>
                  Conformément au RGPD, vous avez plusieurs droits sur vos
                  données personnelles.
                </p>
                <table className="table-fixed border-collapse border border-slate-500 mx-auto">
                  <tbody>
                    <tr>
                      <td>Droit d’accès</td>
                      <td>
                        Vous pouvez demander quelles données personnelles nous
                        avons sur vous et comment nous les utilisons. Vous
                        pouvez aussi demander une copie de vos données
                        personnelles.
                      </td>
                    </tr>
                    <tr>
                      <td>Droit de rectification</td>
                      <td>
                        Si vos données personnelles sont incorrectes ou
                        incomplètes, vous pouvez nous demander de les corriger.
                      </td>
                    </tr>
                    <tr>
                      <td>Droit à l’effacement</td>
                      <td>
                        Vous pouvez demander la suppression de vos données
                        personnelles dans ces cas :
                        <ul>
                          <li>
                            - Nous n’avons plus besoin de vos données
                            personnelles
                          </li>
                          <li>- Vous retirez votre consentement</li>
                          <li>- Vous vous opposez à leur traitement</li>
                          <li>- Leur traitement est illégal</li>
                          <li>
                            - Leur suppression est nécessaire pour respecter la
                            loi
                          </li>
                          <li>
                            - Vous aviez moins de 15 ans lors de leur collecte
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Droit à la limitation du traitement</td>
                      <td>
                        Vous pouvez demander à restreindre l’utilisation de vos
                        données personnelles si :
                        <ul>
                          <li>- Vous pensez qu’elles sont inexactes</li>
                          <li>
                            - Leur traitement est illégal et vous préférez
                            qu’elles soient bloquées
                          </li>
                          <li>
                            - Elles ne sont plus nécessaires, mais vous en avez
                            besoin pour des actions en justice
                          </li>
                          <li>
                            - Vous avez exercé votre droit d’opposition et vous
                            voulez vérifier les motifs légitimes que nous
                            poursuivons.
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <td>Droit d’opposition</td>
                      <td>
                        Vous pouvez vous opposer au traitement de vos données
                        personnelles si cela repose sur nos intérêts légitimes,
                        sauf si nous puissions prouver qu’ils l’emportent sur
                        les vôtres.
                      </td>
                    </tr>
                    <tr>
                      <td>Droit de retirer votre consentement</td>
                      <td>
                        Si vous avez consenti au traitement de vos données, vous
                        pouvez retirer ce consentement à tout moment.
                      </td>
                    </tr>
                    <tr>
                      <td>Droit à la portabilité</td>
                      <td>
                        Dans certains cas, vous pouvez demander une copie de vos
                        données personnelles pour les transmettre à un autre
                        responsable de traitement.
                      </td>
                    </tr>
                    <tr>
                      <td>Droit de donner des directives post-mortem</td>
                      <td>
                        Vous pouvez nous informer de vos souhaits concernant vos
                        données personnelles après votre décès.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        Droit de ne pas être soumis à des décisions automatisées
                      </td>
                      <td>
                        Si une décision automatisée vous affecte, vous pouvez
                        demander qu’un humain réexamine cette décision ou vous
                        opposer à cette décision automatisée.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p>
                  Pour en savoir plus sur ces droits, vous pouvez consulter le
                  site de l’Autorité de protection des données (APD) :
                  https://www.autoriteprotectiondonnees.be/citoyen/vie-privee/quels-sont-mes-droits-
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Comment exercer vos droits ?
                </h3>
                <p>
                  Pour exercer vos droits, envoyez-nous un courrier à : Risk
                  Horizon ASBL, Rue Cuesmes 199, 7012 MONS.
                </p>
                <p>Ou par e-mail : info@risk-horizon.be</p>
                <p>
                  Nous pourrions vous demander une preuve d’identité pour
                  traiter votre demande.
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Quel est notre délai de réponse ?
                </h3>
                <p>
                  Nous répondrons dans un délai d’un mois. Si votre demande
                  n’est pas claire, nous pourrons vous demander plus
                  d’informations. Si vous avez des préoccupations sur la manière
                  dont nous gérons vos données personnelles, vous pouvez
                  contacter l’Autorité de protection des données à :
                </p>
                <p>
                  Rue de la Presse, 35, 1000 Bruxelles
                  <br />
                  +32 (0)2 274 48 00 contact@apd-gba.be
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Comment protégeons-nous vos données personnelles ?
                </h3>
                <p>
                  Nous prenons la sécurité de vos données très au sérieux. Pour
                  cela, nous avons mis en place des protections solides afin de
                  prévenir tout accès non autorisé, modification, fuites ou
                  destructions de vos données personnelles.
                </p>
                <p>
                  Toutes les données que vous nous envoyez sont conservées sur
                  des serveurs sécurisés, que ce soit les nôtres ou ceux de nos
                  partenaires, et se trouvent dans l’Espace Économique Européen
                  (EEE).
                </p>
                <p className="text-lg underline">
                  La politique de confidentialité peut-elle évoluer ?
                </p>
                <p>
                  Oui, nous pouvons modifier cette politique de confidentialité.
                  Si des changements importants affectent vos droits, nous vous
                  informerons et publierons la version mise à jour sur notre
                  site web.
                </p>
              </section>

              <section className="my-8 space-y-4">
                <h3 className="text-xl font-bold mb-2">
                  Comment nous contacter ?
                </h3>
                <p>
                  Si vous avez des questions sur cette politique de
                  confidentialité, n’hésitez pas à nous contacter :
                </p>
                <p>Par e-mail : info@risk-horizon.be</p>
                <p>
                  Par courrier : Risk Horizon ASBL, Rue Cuesmes 199, 7012 MONS
                </p>
              </section>
              <p className="text-sm">Dernière mise à jour : 3 décembre 2024</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page
