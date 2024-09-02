'use server'

import { auth, clerkClient } from '@clerk/nextjs/server'

export const completeOnboarding = async (formData: FormData) => {
  const { userId } = auth()

  if (!userId) {
    return { message: 'No Logged In User' }
  }

  try {
    const res = await clerkClient().users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        formData: { 
        auth: {
          userId: userId,
          sessionClaims: auth().sessionClaims,
          redirectToSignIn: auth().redirectToSignIn
        },
        formData: formData
 }
      }
      // privateMetadata: { ...formData},
    })
    console.log(res.publicMetadata)
    return { publicMetadata: res.publicMetadata }
  } catch (err) {
    return { error: 'There was an error updating the user metadata.' }
  }
}
