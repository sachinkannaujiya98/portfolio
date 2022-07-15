import React from 'react'

const Info = () => {
  return (
    <>
    <div>
        <h4 className=' text-green-200 font-serif text-3xl mt-32'>Hi, my name is</h4>
        <h1 className='text-8xl font-bold font-serif mt-4 text-slate-100'>Sachin Kannaujiya</h1>
        <h2 className=' text-yellow-200 font-serif text-6xl'>I build amazing websites!</h2>
    </div>
    <div className='w-3/6'>
       <p className='text-slate-100 text-xl font-bold font-serif'>I’m a <strong className='text-green-300'>FullStack web developer.</strong> Focused on building products that will make people's lives better. I also create content in form of blogs and threads. I love to learn new things and I am always open to learn new technologies.</p>
    </div>
    <div className='mt-4 md:flex justify-center w-full gap-4'>
        <button className='border-pink-400  rounded-xl w-48 text-xl border-spacing-2 border-2 cursor-pointer bg-pink-500 text-white py-2'>Reach out to me!</button>
        <button className='border-pink-400  rounded-xl w-48 text-xl border-spacing-2 border-2 cursor-pointer text-white py-2 '>Checkout my work!</button>
    </div>
    </>
  )
}

export default Info