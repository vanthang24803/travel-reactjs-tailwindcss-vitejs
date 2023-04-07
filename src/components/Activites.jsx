import React from 'react'

const data = [{
  id: 1,
  title: 'Resorts',
  img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
},
{
  id: 2,
  title: 'Restaurants',
  img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
},
{
  id: 3,
  title: 'Relax',
  img: 'https://images.unsplash.com/photo-1448518184296-a22facb4446f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
}
]

const Activites = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      {data.map((data) => {
        return (
          <div className="relative p-4 " key={data.id}>
            <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[2.25rem] font-bold '>{data.title}</h3>
            <img src={data.img} className='w-full h-full object-cover relative border-4 border-white shadow-lg hover:translate-y-[-0.25rem] ease-linear ' />
          </div>
        )
      })}
    </div>
  )
}

export default Activites
