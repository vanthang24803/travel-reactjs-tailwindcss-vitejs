import React from 'react'

const data = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  }

];



const Gallery = () => {
  return (
    <div className='max-w-[1440px] m-auto w-full px-4 py-16' id='gallery'>
      <h2 className="text-center text-gray-700 text-5xl p-4 my-4 uppercase font-bold hover:underline ease-in-out">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2 ">
          <img src="https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </div>
        {data.map((data) => {
          return (
            <div className="" key={data.id}>
              <img src={data.image} alt="" className='hover:scale-105 ease-in rounded ' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
