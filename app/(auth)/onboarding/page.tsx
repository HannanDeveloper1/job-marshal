import OnboardingForm from '@/components/pages/onboarding/onboarding-form'
import { prisma } from '@/lib/db'
import requireUser from '@/lib/validation/require-user'
import { redirect } from 'next/navigation'
import React from 'react'

const checkUserFinishedOnboarding = async(userId: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId
    },
    select: {
      onboardingCompleted: true
    }
  })
  if(user?.onboardingCompleted){
    return redirect('/')
  }

  return user;
}

export default async function page() {
  const session = await requireUser();
  await checkUserFinishedOnboarding(session.id as string);
  return (
    <div>
        <div className="min-h-screen w-screen flex flex-col items-center justify-center py-10">
          <OnboardingForm />
        </div>
    </div>
  )
}
