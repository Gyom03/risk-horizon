import React from "react"

function page() {
  return (
    <main className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to our RGPD & Privacy Page</h2>
            <p className="text-gray-500 dark:text-gray-400">
              At our company, we take the privacy and security of your personal data very seriously. This page provides
              you with information about the General Data Protection Regulation (GDPR) and our privacy policy, so you
              can understand how we collect, use, and protect your information.
            </p>
          </div>
          <div id="rgpd">
            <h2 className="text-2xl font-bold mb-4">What is GDPR?</h2>
            <p className="text-gray-500 dark:text-gray-400">
              The General Data Protection Regulation (GDPR) is a comprehensive data protection law that came into effect
              in the European Union in 2018. It aims to give individuals more control over their personal data and
              ensure that organizations handle this data responsibly.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-bold">Your Rights Under GDPR</h3>
                <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400">
                  <li>Right to access your personal data</li>
                  <li>Right to rectify inaccurate personal data</li>
                  <li>{`Right to erasure (the "right to be forgotten")`}</li>
                  <li>Right to restrict processing of your personal data</li>
                  <li>Right to data portability</li>
                  <li>Right to object to the processing of your personal data</li>
                  <li>Right to not be subject to automated decision-making</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold">How We Comply with GDPR</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We have implemented various measures to ensure compliance with GDPR, including:
                </p>
                <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400">
                  <li>Transparent data collection and processing practices</li>
                  <li>Secure storage and handling of personal data</li>
                  <li>Timely response to data subject requests</li>
                  <li>Regular review and update of our data protection policies</li>
                </ul>
              </div>
            </div>
          </div>
          <div id="privacy">
            <h2 className="text-2xl font-bold mb-4">Our Privacy Policy</h2>
            <p className="text-gray-500 dark:text-gray-400">
              At our company, we are committed to protecting the privacy and security of your personal information. Our
              privacy policy outlines how we collect, use, and safeguard your data.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="text-lg font-bold">Data Collection</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We may collect personal information from you when you use our services, such as your name, email
                  address, and other contact details. We may also collect information about your usage of our website
                  and services, such as your IP address and browsing history.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Data Usage</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We use your personal data to provide and improve our services, communicate with you, and comply with
                  legal and regulatory requirements. We do not sell or share your personal data with third parties for
                  their own marketing purposes without your consent.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Data Security</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  We implement a variety of security measures to protect your personal data from unauthorized access,
                  modification, or disclosure. This includes using encryption, access controls, and regular security
                  audits.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold">Your Rights</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  You have the right to access, rectify, or delete your personal data, as well as to object to or
                  restrict the processing of your data. You can exercise these rights by contacting us at [email
                  protected]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page
