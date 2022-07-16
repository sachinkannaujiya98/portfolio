import React from 'react'
import Avatar from "../assets/sachin.jpg"
const About = () => {
  return (
    <div className='mb-20'>
      <div className='flex justify-start items-center gap-x-4'>
        <div>
          <h1 className='text-4xl font-[400] text-[#A1ABBF]'> <span className='text-[#52DEE5]'>01. </span> About me</h1>
        </div>
        {/* <div className='h-[2px] w-1/3 bg-green-400'></div> */}
        <hr className='h-[2px] w-1/3 bg-[#A1ABBF] block mt-2' />
      </div>
      <div className='flex align-bottom mt-12'>
        <div >
          <p className=' text-xl w-[85%] font-Sora text-[#A1ABBF]'>I am a full-stack web developer who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing.</p>
        </div>
        <div><img className='max-w-[95%] h-auto rounded-full border-[#6A769D] border-4' src={Avatar} alt='' /></div>
      </div>
    </div>
  )
}

export default About