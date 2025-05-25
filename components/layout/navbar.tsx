
import React from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { ToggleTheme } from '@/components/utils/toggle-theme'
import BrandName from '../shared/brand-name'
import { auth, signOut } from '@/lib/auth'
import Link from 'next/link'

export default async function Navbar() {
  const session =  await auth();
  return (
    <nav className='flex items-center justify-between py-5'>
      <BrandName />
      <div className='flex items-center gap-4'>
        <ToggleTheme />
        {session?.user ? (
          <form action={async ()=>{
            "use server";

            await signOut({redirectTo: '/'})
          }
          }>
            <Button>Logout</Button>
          </form>
        ): (
          <Link href={'/login'} className={buttonVariants({variant: 'default'})}>Login</Link>
        )}
      </div>
    </nav>
  )
}
