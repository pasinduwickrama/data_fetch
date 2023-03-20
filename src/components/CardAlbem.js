import React from 'react'

export default function CardAlbem({toAdd,isAdd,dataa,handleButtonClick}) {
  return (
    <div className=' '>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5   gap-5 ' onClick={() =>toAdd(!isAdd)} >
            {dataa.map((dataa) => (
                <div key={dataa.id} className='h-48 lg:h-auto lg:w-68 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-yellow-100 '>
                    <div>{dataa.albumId}</div>
                    <div>{dataa.title}</div>
                <div onClick={handleButtonClick}><img src={dataa.url} className='i' alt='' /></div>
               
            </div>
            
            ))}
        </div> 
    </div>
  )
}
