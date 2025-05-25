import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GitHub, Google } from '../constants/icons'
import { auth, signIn } from '@/lib/auth'
import { GeneralSubmitBtn } from '../utils/submit-buttons'
import { redirect } from 'next/navigation'

export default async function LoginForm() {
    const session = await auth();

    if(session?.user){
        return redirect('/');
    }
  return (
    <div className='flex flex-col gap-6'>
        <Card>
            <CardHeader className='text-center'>
            <CardTitle className='text-xl'>Welcome Back</CardTitle>
            <CardDescription>Login to your account with these options</CardDescription>
            </CardHeader>
            <CardContent>
                <div className='flex flex-col gap-4'>
                    <form action={async () => {
                        "use server";

                        await signIn("github", {
                            redirectTo: "/",
                        })
                    }}>
                        <GeneralSubmitBtn>
                            <GitHub className='size-4' />
                            Login With Github
                            </GeneralSubmitBtn>
                    </form>
                    <form action={async () => {
                        "use server";

                        await signIn("google", {
                            redirectTo: "/",
                        })
                    }}>
                        <GeneralSubmitBtn>
                            <Google className='size-4' />
                            Login With Google
                        </GeneralSubmitBtn>
                    </form>
                </div>
            </CardContent>
        </Card>
        <div className='text-center text-xs text-muted-foreground text-balance'>By using <strong>Job Marshal</strong>, you agree to our terms and services & privacy policy</div>
    </div>
  )
}
