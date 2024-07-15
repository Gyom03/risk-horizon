import React from "react"

function page() {
  return (
    <main className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold mb-4">Conditions générales de vente</h2>
          <div>
            <h3 className="text-xl font-bold mb-4">Article 1 – Objet</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Article 1 – Objet Les présentes conditions générales de vente ou de fourniture de services
              s&apos;appliquent, sans restriction ni réserve, à l&apos;ensemble des produits et/ou des services proposés
              par l’ASBL Risk Horizon , dont le siège social est sis à Mons et inscrite au Registre de la Banque
              Carrefour des Entreprises sous le numéro 1008.675.581. Le client est défini ci-dessous comme étant la
              société ou la personne physique, marquant son accord sur l&apos;offre contenue dans la remise de prix,
              émise par Risk Horizon. Les présentes conditions générales de vente sont applicables à toute commande
              passée par Le client et à tous contrats de vente liant ceux-ci, en ce compris toutes prestations de
              services accessoires.
            </p>
          </div>
          <h2 className="text-xl font-bold mb-4">Article 2 – Prix – Modalités de paiement</h2>
          <p className="text-gray-500 dark:text-gray-400">
            Les tarifs en vigueur sont exprimés TTC, nous nous réservons le droit de reporter toute nouvelle taxe et
            augmentation de taux. Les prix indiqués s&apos;entendent en Euros. L’acheteur doit régler la totalité des
            achats à la commande, aux coordonnées bancaires indiquées sur la facture. Les factures sont payables à 30
            jours ouvrés, sauf indication d&apos;un autre délai de paiement soit sur la facture soit sur la commande. En
            cas de non-paiement à l&apos;échéance, Risk Horizon se réserve le droit de demander un paiement
            d&apos;intérêts fixes s&apos;élevant à 10% de la somme restant due. Risk Horizon sera autorisé à suspendre
            toute prestation de services sans avertissement préalable en cas de retard de paiement.
          </p>
          <div className="mt-4 space-y-4">
            <h3 className="text-xl font-bold">Article 3 - Réclamations</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Toute réclamation doit être notifiée à l’ASBL exclusivement par e-mail à l&apos;adresse
              guillaume.rosin@risk-horizon.be au plus tard dans les huit jours de la livraison de marchandises ou la
              prestation de service, à défaut de quoi elle ne sera pas prise en compte. Si un paiement est toujours dû
              plus de soixante 60 jours après la date d&apos;échéance, Risk Horizon se réserve le droit de faire appel
              aux services d&apos;une société de recouvrement de créances. Tous les frais juridiques seront à la charge
              du client.
            </p>

            <div>
              <h3 className="text-xl font-bold">Article 6 – Responsabilité</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Les contrats proposés à la vente ont fait l&apos;objet de tous les soins nécessaires. Risk Horizon
                s&apos;engage à faire de son mieux pour fournir des services performants en temps voulu, conformément
                aux délais convenus. Toutefois, aucune de ses obligations ne peut être considérée comme une obligation
                de résultat. Risk Horizon ne peut en aucun cas être tenu par le client d&apos;apparaître comme une
                tierce partie dans le cadre d&apos;une demande de dommages-intérêts introduite contre le client par un
                consommateur final.
              </p>
            </div>
          </div>
          <div id="privacy">
            <h2 className="text-xl font-bold mb-4">Article 7 – Vie Privée</h2>
            <p className="text-gray-500 dark:text-gray-400">
              Nous respectons votre vie privée. Nous ne collectons pas de données sans votre consentement.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-xl font-bold">
                  Article 8 – Invalidité – Force majeure – Droit applicable et Tribunal compétent
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Si pour une quelconque raison une disposition des présentes conditions générales devait être déclarée
                  inapplicable, cette inapplicabilité n&apos;affecterait pas l&apos;application des autres dispositions
                  des conditions générales. Celle jugée inapplicable étant alors remplacée par la disposition la plus
                  proche possible. Ni Risk Horizon, ni le client ne sauraient être tenus responsables de toute
                  inexécution qui aurait pour origine un cas de force majeure, échappant à leur contrôle, incluant
                  notamment, sans que cela soit limitatif, les cas de guerre, d&apos;émeute, d&apos;insurrection,
                  d&apos;interruption de transport, de problème d&apos;importation ou d&apos;exportation, de grève, de
                  lock-out, de pénurie, d&apos;incendie, de tremblement de terre, de tempête, d&apos;inondations. Les
                  présentes conditions générales sont exclusivement régies par la loi belge. En cas de litige, seuls les
                  Tribunaux de l’arrondissement judiciaire de Mons seront compétents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

/* ```Conditions générales de vente
Article 1 – Objet
Les présentes conditions générales de vente ou de fourniture de services s&apos;appliquent, sans restriction ni réserve, à l&apos;ensemble des produits et/ou des services proposés par l’ASBL Risk Horizon , dont le siège social est sis à Mons et inscrite au Registre de la Banque Carrefour des Entreprises sous le numéro 1008.675.581.
Le client est défini ci-dessous comme étant la société ou la personne physique, marquant son accord sur l&apos;offre contenue dans la remise de prix, émise par Risk Horizon. 
Les présentes conditions générales de vente sont applicables à toute commande passée par Le client et à tous contrats de vente liant ceux-ci, en ce compris toutes prestations de services accessoires.  
Article 2 – Prix – Modalités de paiement
Les tarifs en vigueur sont exprimés TTC, nous nous réservons le droit de reporter toute nouvelle taxe et augmentation de taux. Les prix indiqués s&apos;entendent en Euros. 
L’acheteur doit  régler la totalité des achats à la commande, aux coordonnées bancaires indiquées sur la facture.
Les factures sont payables à 30 jours ouvrés, sauf indication d&apos;un autre délai de paiement soit sur la facture soit sur la commande. En cas de non-paiement à l&apos;échéance, Risk Horizon se réserve le droit de demander un paiement d&apos;intérêts fixes s&apos;élevant à 10% de la somme restant due. Risk Horizon sera autorisé à suspendre toute prestation de services sans avertissement préalable en cas de retard de paiement.

Article  3 - Réclamations
Toute réclamation  doit être notifiée à l’ASBL  exclusivement par e-mail à l&apos;adresse ﻿﻿guillaume.rosin@risk-horizon.be﻿﻿  au plus tard dans les huit jours de la livraison de marchandises ou la prestation de service, à défaut de quoi elle ne sera pas prise en compte. 
Si un paiement est toujours dû plus de soixante (60) jours après la date d&apos;échéance, Risk Horizon se réserve le droit de faire appel aux services d&apos;une société de recouvrement de créances. Tous les frais juridiques seront à la charge du client.

Article 6 – Responsabilité
Les contrats proposés à la vente ont fait l&apos;objet de tous les soins nécessaires.
Risk Horizon s&apos;engage à faire de son mieux pour fournir des services performants en temps voulu, conformément aux délais convenus. Toutefois, aucune de ses obligations ne peut être considérée comme une obligation de résultat. Risk Horizon ne peut en aucun cas être tenu par le client d&apos;apparaître comme une tierce partie dans le cadre d&apos;une demande de dommages-intérêts introduite contre le client par un consommateur final.
Article 7 – Vie Privée
Nous respectons votre vie privée. Nous ne collectons pas de données sans votre consentement. 
Article 8 – Invalidité – Force majeure – Droit applicable et Tribunal compétent
Si pour une quelconque raison une disposition des présentes conditions générales devait être déclarée inapplicable, cette inapplicabilité n&apos;affecterait pas l&apos;application des autres dispositions des conditions générales. Celle jugée inapplicable étant alors remplacée par la disposition la plus proche possible.
Ni Risk Horizon, ni le client ne sauraient être tenus responsables de toute inexécution qui aurait pour origine un cas de force majeure, échappant à leur contrôle, incluant notamment, sans que cela soit limitatif, les cas de guerre, d&apos;émeute, d&apos;insurrection, d&apos;interruption de transport, de problème d&apos;importation ou d&apos;exportation, de grève, de lock-out, de pénurie, d&apos;incendie, de tremblement de terre, de tempête, d&apos;inondations.
Les présentes conditions générales sont exclusivement régies par la loi belge. En cas de litige, seuls les Tribunaux de l’arrondissement judiciaire de Mons seront compétents.
``` */

export default page
