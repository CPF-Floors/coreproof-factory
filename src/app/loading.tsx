import React from 'react'
import Image from 'next/image'

function Loading() {
  return (
    <div className='loading-container flex justify-center items-center h-lvh w-100'>
        <Image className='bg-transparent' height={150} width={150} alt='Logo' src="/Group(2).svg">
        </Image>
    </div>
  )
}

export default Loading