import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='flex justify-around flex-col gap-2 sm:gap-0 sm:flex-row bg-[black] py-5 item-center'>
      <Link href="/">
      <Image src="/logo2.png" alt=' ' width={120} height={40}/> 
      </Link>
      <p className='text:sm text-white'>All right reserved. Copyright @rubyrelish</p>
      <div className='flex'>
        <Link href="https://www.instagram.com/ruby_relish/" target="_blank" rel="noopener noreferrer">
          <Image src="/instagram_icon.png" width={40} height={40} alt="Instagram"/>
        </Link>
        <Link href="https://www.youtube.com/@Rubyrelish44" target="_blank" rel="noopener noreferrer">
          <Image src="/youtube_icon1.png" width={40} height={40} alt="Youtube"/>
        </Link>
        <Link href="https://www.facebook.com/Rubyrelish44/" target="_blank" rel="noopener noreferrer">
          <Image src="/facebook_icon.png" width={40} height={40} alt="Facebook"/>
        </Link>
      </div>
    </div>
  )
}

export default Footer
