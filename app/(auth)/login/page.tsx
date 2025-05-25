import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import BrandName from '@/components/shared/brand-name'
import LoginForm from '@/components/pages/login-form'

export default function Login() {
  return (
    <div className='min-h-screen w-screen flex items-center justify-center'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <BrandName className='self-center'/>
        
        <LoginForm />
      </div>
    </div>
  )
}
