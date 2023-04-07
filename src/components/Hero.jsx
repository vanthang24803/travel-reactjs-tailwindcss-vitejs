import React from 'react'

const Hero = () => {
    return (
        <div className=''>
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80" alt="sea"
                className='w-full h-[90vh] object-cover '
            />
            <div className="max-w-[1140px] m-auto ">
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex-col text-[#fff] p-4">
                    <h1 className='font-bold text-5xl'>Find Your Special Trip</h1>
                    <h2 className="text-4xl py-4 italic">With Weekway</h2>
                    <p className='text-[14px]'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus harum voluptas facere quis ad esse,
                        culpa repudiandae ex, consequuntur quas quaerat dicta incidunt numquam ullam m
                        agni, cupiditate id sunt maiores.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero
