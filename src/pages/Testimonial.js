import React from 'react'
import Avatar from "../assets/sachin.jpg"
const Testimonial = () => {
  return (
    <div>
         <div className='flex justify-start items-baseline gap-x-4'>
            <div>
            <h1 className='text-3xl font-[300] text-green-300'>Testimonial</h1>
            </div>
            {/* <div className='h-[2px] w-1/3 bg-green-400'></div> */}
            <hr className='h-[2px] w-1/3 bg-green-400 block'/>
        </div>
        <div className='flex justify-evenly items-center mt-4'>
            <div className='min-h-[150px] w-[45%] border-pink-400 border-2 rounded-md'>
                <p className='px-4 py-4 font-medium text-xl font-serif text-white '>I have launched more than 2 products on Product Hunt with Avneesh and I have enjoyed the entire journey from getting the project idea till launching it on Product Hunt</p>
                <div className='flex items-center mb-5 ml-5 gap-4'>
                  <img className='h-[12%] w-[12%] rounded-full' src={Avatar} alt="avatar"/>
                  <span className='font-light text-xl text-white font-serif'>Co-Worker</span>
                </div>
                </div>
            <div className='min-h-[150px] w-[45%] border-pink-400 border-2 rounded-md'>
                <p className='px-4 py-4 font-medium text-xl font-serif text-white '>I've worked on numerous projects with Avneesh and the flow has always been perfect. Avneesh is a great leader and we also listen to spotify together!</p>
                <div className='flex items-center mb-5 ml-5 gap-4'>
                  <img className='h-[12%] w-[12%] rounded-full' src={Avatar} alt="avatar"/>
                  <span className='font-light text-xl text-white font-serif'>Co-Worker</span>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Testimonial