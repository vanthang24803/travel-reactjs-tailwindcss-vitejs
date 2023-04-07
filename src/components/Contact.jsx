import React from 'react'

const Contact = () => {
  return (
    <div id="contact" className='max-w-[1440px] m-auto w-full py-16'>
      <h2 className='text-center text-gray-700 text-[2.5rem] hover:underline py-4'>Send us a messenger</h2>
      <p className="text-center text-gray-500 py-2 text-[18px]">We're standing by!</p>
      <div className="grid md:grid-cols-2 ">
        <img src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""
          className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]'
        />
        <form>
          <div className="grid grid-cols-2">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
            <input type="email" placeholder='Email' />
            <input type="tel" placeholder='Number Phone' />
            <input type="text" placeholder='Address' className='border col-span-2 p-2 m-2' />
            <textarea cols="30" rows="10" placeholder='Description' className='border col-span-2 p-2 m-2'></textarea>
            <button className='col-span-2 m-2 hover:scale-105 ease-in w-[40%] '>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
