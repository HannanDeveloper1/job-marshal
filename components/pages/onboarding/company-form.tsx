"use client"
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { companySchema } from '@/lib/validation/zodSchemas';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectItem, SelectValue } from '@/components/ui/select';
import { countryList } from '@/lib/countriesList';
import { Textarea } from '@/components/ui/textarea';
import { UploadDropzone } from '@/components/utils/uploadthing-reexport';
import { createCompany } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { XIcon } from 'lucide-react';

export default function CompanyForm() {
  const form = useForm<z.infer<typeof companySchema>>({
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: '',
      location: '',
      about: '',
      logo: '',
      website: '',
      linkedInAccount: ''
    }
  });

  const [pending, setPending] = useState(false);

  const onSubmit = async(data: z.infer<typeof companySchema>) => {
    try {
      setPending(true);
      await createCompany(data);
    } catch (error) {
      if (error instanceof Error && error.message !== "NEXT_REDIRECT"){
        console.log("Something went wrong")
      }
    }finally{
      setPending(false);
    }
  }

  return (
    <Form {...form}>
      <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>
          <FormField 
          control={form.control}
          name="logo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Logo</FormLabel>
              <FormControl>
                {field.value ? (
                  <div className='relative w-fit'>
                    <Image src={field.value} alt='Company Logo' width={100} height={100} className='rounded-lg' />
                    <Button className='absolute -top-2 -right-2' type='button' variant={'destructive'} onClick={()=> field.onChange("")}><XIcon /></Button>
                  </div>
                ) : (
                  <UploadDropzone endpoint={"imageUploader"} onClientUploadComplete={(res)=> {
                  console.log(res)
                  field.onChange(res[0].ufsUrl)
                }} onUploadError={(err)=>{
                  console.error("Error uploading file", err);
                }}  className='ut-button:bg-primary ut-button:text-white ut-button:hover:bg-primary/90 ut-label:text-muted-foreground ut-allowed-content:text-muted-foreground border-primary'/>
                )}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
          
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <FormField 
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder='Enter company Name' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Location</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Location" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Worldwide</SelectLabel>
                      <SelectItem value='worldwide'><span>🌍</span><span>Worldwide / Remote</span></SelectItem>
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Countries</SelectLabel>
                      {countryList.map((country)=> (
                        <SelectItem key={country.code} value={country.name}>
                          <span role="img" aria-label={country.name}>{country.flagEmoji}</span>
                          <span className='pl-2'>{country.name}</span>
                          <input type="hidden" value={country.name} />
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website URL</FormLabel>
                <FormControl>
                  <Input type='url' placeholder='https://yourcompany.com' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField 
            control={form.control}
            name="linkedInAccount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn Account</FormLabel>
                <FormControl>
                  <Input type='url' placeholder='https://www.linkedin.com/company/yourcompany' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField 
          control={form.control}
          name="about"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company Description</FormLabel>
              <FormControl>
                <Textarea maxLength={500} minLength={10} placeholder='Tell us about your company...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
          />
        <Button type='submit' className='w-full' disabled={pending}>
          {pending ? 'Submitting...': 'Continue'}
        </Button>
      </form>
    </Form>
  )
}
