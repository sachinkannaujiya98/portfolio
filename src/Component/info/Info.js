import React from 'react'

const Info = () => {
  return (
    <>
      <div className='mb-20' id='info'>
        <div>
          <h4 className=' text-[#52DEE5] font-Sora text-3xl mt-32'>Hi, my name is</h4>
          <h1 className='text-4xl sm:text-7xl font-bold font-Sora my-3 text-[#C7D2FC]'>Sachin Kannaujiya</h1>
          <h2 className='text-[#A1ABBF] font-Sora text-3xl sm:text-6xl font-medium my-2 leading-0'>I build amazing websites!</h2>
        </div>
        <div className='sm:w-7/12'>
          <p className='text-[#A1ABBF] text-base leading-6 font-medium font-Sora my-4'>I’m a <strong className='text-[#52DEE5]'>FullStack web developer.</strong> Focused on building products that will make people's lives better. I also create content in form of blogs and threads. I love to learn new things and I am always open to learn new technologies.</p>
        </div>
        <div className='mt-12 flex flex-col md:flex-row justify-start w-full gap-4'>
          <button className='border-[#52DEE5] hover:bg-transparent rounded-xl w-48 text-xl border-spacing-2 border-2 cursor-pointer bg-[#52DEE5] text-white py-2'>Reach out to me!</button>
          <button className='border-[#52DEE5] hover:bg-[#52DEE5] rounded-xl w-48 text-xl border-spacing-2 border-2 cursor-pointer text-white py-2 '>Checkout my work!</button>
        </div>
      </div>
    </>
  )
}

export default Info