import Image from 'next/image'
import Link from 'next/link'

export default function BrandName({className, ...props}:{className?: string}) {
  return (
    <Link href='/' className={`flex items-center gap-2 ${className}`} {...props}>
      <Image src={'/logo.png'} alt='JobMarshal' width={40} height={40} />
        <h1 className='text-2xl font-bold'>
          Job<span className='text-primary'>Marshal</span>
        </h1>
      </Link>
  )
}
