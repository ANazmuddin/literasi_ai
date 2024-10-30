import React from 'react'
import Image from 'next/image'
import { Button, Link } from "@nextui-org/react"

function Hero() {
  return (
    <div className='px-10 md:px-20 lg:px-44 ml-10 h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div>
          <h2 className='text-[70px] text-primary font-extrabold py-10'>Create Enchanting Tales for Kids in No Time</h2>
          <p className='text-2xl text-primary font-light'>Craft exciting, custom stories that turn your child's adventures into vivid tales and ignite their love for reading. It only takes moments!</p>
          <Link href={'/create-story'}>
          <Button size='lg' color='primary' className='mt-5 font-bold text-2xl p-8'>Created Story</Button>
          </Link>
        </div>
        <div>
          <Image src={'/hero1.1.png'} alt='hero' width={700} height={400}/>
        </div>
      </div>
    </div>
  )
}

export default Hero