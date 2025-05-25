"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export function GeneralSubmitBtn({children}: {children: React.ReactNode}) {
    const { pending } = useFormStatus();
  return (
    <Button className='w-full' variant={'outline'} disabled={pending}>
        {pending ? (
            <>
                <Loader2 className='size-4 animate-spin' />
                <span>Submitting...</span>
            </>
            ) : (
                children
            )
        }
    </Button>
  )
}
