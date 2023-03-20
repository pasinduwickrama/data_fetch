import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CardList({data}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-4'>
        <div className='h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden' > 
            <div>{data.title}</div>
            <img src={data.url} alt={data.title} />     
        </div>
    </div>
  )
}
