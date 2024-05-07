import React from 'react'
import Image from 'next/image'

function Loading() {
  return (
    <div className='flex justify-center items-center h-lvh w-100'>
        <Image height={100} width={100} alt='Logo' src="/Load.svg">

        </Image>
    </div>
  )
}

export default Loading