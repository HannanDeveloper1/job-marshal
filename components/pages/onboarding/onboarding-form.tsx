"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import TypeSelection from './type-selection'
import CompanyForm from './company-form'


export default function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserSelectionType>(null)

  const handleUserTypeSelection = (type: UserSelectionType) => {
    setUserType(type);
    setStep(2);
  }

  const renderStep = () => {
    switch (step) {
      case 1:
        return <TypeSelection onSelect={handleUserTypeSelection}/>;
      case 2:
        return userType === 'company' ? (
            <CompanyForm />
         ) : (
            <p>Job seeker onboarding form</p>
          );
      default:
        return null;
    }
  }

  return (
    <>
        <div className="flex items-center gap-4 mb-10">
            <Image src={'/logo.png'} alt='JobMarshal' width={50} height={50} />
            <h1 className='text-4xl font-bold'>
              Job<span className='text-primary'>Marshal</span>
            </h1>
        </div>

        <Card className="max-w-lg w-full">
          <CardContent className='p-6'>
            {renderStep()}
          </CardContent>
        </Card>
    </>
  )
}
