import React from 'react'
import Avatar from "../assets/sachin.jpg"
const Testimonial = () => {
  return (
    <div>
      <div className='flex justify-start items-center gap-x-4'>
        <div>
          <h1 className='text-4xl font-Sora font-[400] text-[#A1ABBF]'> <span className='text-[#52DEE5]'>02. </span>Testimonial</h1>
        </div>
        {/* <div className='h-[2px] w-1/3 bg-green-400'></div> */}
        <hr className='h-[2px] w-1/3 bg-[#A1ABBF] block' />
      </div>
      <div className='flex justify-evenly items-center mt-20'>
        <div className='min-h-[150px] w-[45%] border-[#A1ABBF] border-2 rounded-md skew-y-3 hover:skew-y-0 shadow-2xl shadow-[#A1ABBF]'>
          <p className='px-4 py-4 font-medium text-base font-Sora text-[#A1ABBF] '>I have launched more than 2 products on Product Hunt with Avneesh and I have enjoyed the entire journey from getting the project idea till launching it on Product Hunt</p>
          <div className='flex items-center mb-5 ml-5 gap-4'>
            <img className='h-[12%] w-[12%] rounded-full' src={Avatar} alt="avatar" />
            <span className='font-light text-xl text-[#52DEE5] font-Sora'>Co-Worker</span>
          </div>
        </div>
        <div className='min-h-[150px] w-[45%] border-[#A1ABBF] border-2 rounded-md skew-y-3 hover:skew-y-0 shadow-2xl shadow-[#A1ABBF]'>
          <p className='px-4 py-4 font-medium text-base font-Sora text-[#A1ABBF] '>I've worked on numerous projects with Avneesh and the flow has always been perfect. Avneesh is a great leader and we also listen to spotify together!</p>
          <div className='flex items-center mb-5 ml-5 gap-4'>
            <img className='h-[12%] w-[12%] rounded-full' src={Avatar} alt="avatar" />
            <span className='font-light text-xl text-[#52DEE5] font-Sora'>Co-Worker</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial