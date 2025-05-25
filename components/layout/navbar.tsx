"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { ToggleTheme } from '@/components/utils/toggle-theme'
import BrandName from '../shared/brand-name'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-5'>
      <BrandName />
      <div className='flex items-center gap-4'>
        <ToggleTheme />
      <Button>Login</Button>
      </div>
    </nav>
  )
}
