
import React from 'react'
import Logo from "../assets/log2.png"
const Navbar = () => {
  return (
    <div className='w-full  md:flex justify-between pt-4 sticky top-0 bg-bgblue/60 backdrop-filter backdrop-blur-xl px-28 '>
      <div className=' text-slate-200 font-Sora text-xl'>
        <img src={Logo} alt="logo" />

      </div>
      <div>
        <ul className=' md:flex justify-evenly align-middle'>
          <li className='mx-4 text-[#C7D2FC] font-Sora text-xl hover:border-b-2 hover:border-[#52DEE5] cursor-pointer'>
            <span className='text-[#52DEE5]'>1.</span> About</li>
          <li className='mx-4 text-[#C7D2FC] font-Sora text-xl hover:border-b-2 hover:border-[#52DEE5] cursor-pointer'>
            <span className='text-[#52DEE5]'>2.</span> Projects</li>
          <li className='mx-4 text-[#C7D2FC] font-Sora text-xl hover:border-b-2 hover:border-[#52DEE5] cursor-pointer'>
            <span className='text-[#52DEE5]'>3.</span> Skills</li>
          <li className='mx-4 text-[#C7D2FC] font-Sora text-xl hover:border-b-2 hover:border-[#52DEE5] cursor-pointer'>
            <span className='text-[#52DEE5]'>4.</span> Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar