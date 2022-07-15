import React from 'react'
import Avatar from "../assets/sachin.jpg"
const About = () => {
  return (
    <div>
        <div className='flex justify-start items-baseline gap-x-4'>
            <div>
            <h1 className='text-3xl font-[300] text-green-300'>About me</h1>
            </div>
            {/* <div className='h-[2px] w-1/3 bg-green-400'></div> */}
            <hr className='h-[2px] w-1/3 bg-green-400 block'/>
        </div>
        <div className='flex align-bottom mt-12'>
            <div >
                <p className='font-medium text-2xl w-[85%] font-serif text-white'>I am a full-stack web developer who loves to design and develop beautiful websites. I have been coding for over a year and enjoying every part of my journey. I love documenting my journey by writing blog posts and teaching others through my writing.</p>
            </div>
            <div><img className='max-w-[95%] h-auto rounded-full border-blue-200 border-4' src={Avatar} alt=''/></div>
        </div>
    </div>
  )
}

export default About