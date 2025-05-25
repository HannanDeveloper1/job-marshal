import { Button } from '@/components/ui/button'
import { CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, UserRound } from 'lucide-react'
import React from 'react'

interface UserTypeSelectionProps {
  onSelect: (type: UserSelectionType) => void;
}

export default function TypeSelection({onSelect}: UserTypeSelectionProps) {
  return (
      <>
          <CardHeader className='text-center'>
              <CardTitle className='text-2xl'>Welcome! Lets get started</CardTitle>
              <CardDescription>Choose how would like to use our platform!</CardDescription>
            </CardHeader>
            <CardContent className='grid gap-0.5'>
              <Button variant={'outline'} onClick={() => onSelect("company")} className='w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:bg-primary/5 hover:border-primary border-b-transparent rounded-xl rounded-b-none'>
                <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center'>
                  <Building2 className='size-6 text-primary' />
                </div>

                <div className="text-left">
                  <h3 className='font-bold text-lg'>Company / Organization</h3>
                  <p>Post Jobs and find exceptional talent</p>
                </div>
              </Button>

              <Button variant={'outline'} onClick={() => onSelect("jobSeeker")} className='w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-200 hover:bg-primary/5 hover:border-primary border-t-transparent rounded-xl rounded-t-none'>
                <div className='size-12 rounded-full bg-primary/10 flex items-center justify-center'>
                  <UserRound className='size-6 text-primary' />
                </div>

                <div className="text-left">
                  <h3 className='font-bold text-lg'>Job Seeker</h3>
                  <p>Find your dream job opportunity</p>
                </div>
              </Button>
            </CardContent>
      </>
  )
}
