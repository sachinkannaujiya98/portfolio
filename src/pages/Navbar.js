
import React from 'react'

const Navbar = () => {
  return (
    <div className='h-12 w-full  md:flex justify-between pt-4'>
      <div className=' text-slate-200 font-serif text-3xl'>logo</div>
         <div>
            <ul className='  md:flex  justify-evenly align-middle'>
                <li className='pl-8 text-slate-200 font-serif text-3xl'>About</li>
                <li className='pl-8 text-slate-200 font-serif text-3xl'>Work</li>
                <li className='pl-8 text-slate-200 font-serif text-3xl'>Skill</li>
                <li className='pl-8 text-slate-200 font-serif text-3xl'>Contact</li>
            </ul>
            </div>    
   </div>
  )
}

export default Navbar