import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (auth().userId) {
    redirect("/dashboard/")
  }

  return <>{children}</>
}

// import { auth } from '@clerk/nextjs/server'
// import { redirect } from 'next/navigation'

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   if ((auth() as any).sessionClaims?.metadata.onboardingComplete === true) {
//     redirect('/dashboard/')
//   }

//   return <>{children}</>
// }