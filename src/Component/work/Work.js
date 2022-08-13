import React from "react";
import Scrollcontent from "../aos/content";
const Work = () => {
  return (
    <div className="h-full mb-20" id="project">
      <Scrollcontent>
        <div className="flex justify-start items-center gap-x-4 my-[10%]">
          <div>
            <h1 className="text-3xl font-[300]  text-[#A1ABBF]">
              <span className='text-[#52DEE5]'>03. </span>My Projects</h1>
          </div>
          {/* <div className='h-[2px] w-1/3 bg-green-400'></div> */}
          <hr className="h-[2px] w-1/3 bg-[#A1ABBF] block" />
        </div>
      </Scrollcontent>
      <div className="flex flex-col md:flex-row items-top gap-10 md:gap-28 mt-6">
        <div className="md:w-1/2">
          <img className="h-72 w-[623px]" src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="banner" />
        </div>
        <div className="md:w-1/2" >
          <h5 className="text-[#52DEE5] font-semibold text-3xl">Irish Players Club</h5>
          <p className='text-base font-Sora text-[#A1ABBF] mt-3'>A NFT collection of 5,555 unique leprechaun NFTs created by former Domers in an effort to support currently rostered Notre Dame football players.</p>
          <div className="flex items-center gap-2 mt-4">
            <span className="bg-[#C7D2FC] px-3 rounded-xl font-Sora text-xl text-black">Next.js</span>
            <span className="bg-[#C7D2FC] px-3 rounded-xl font-Sora text-xl text-black">Reactjs</span>
          </div>
          <p className='text-base font-Sora text-[#A1ABBF] my-3'>
            <span className="text-base font-Sora text-[#52DEE5]">Role: </span>FullStack Developer</p>
          <button className="bg-[#52DEE5] py-2 px-5 rounded-md font-Sora text-base text-black">
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-top gap-10 md:gap-28 mt-6">
        <div className="md:w-1/2">
          <img className="h-72 w-[623px]" src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="banner" />
        </div>
        <div className="md:w-1/2" >
          <h5 className="text-[#52DEE5] font-semibold text-3xl">Irish Players Club</h5>
          <p className='text-base font-Sora text-[#A1ABBF] mt-3'>A NFT collection of 5,555 unique leprechaun NFTs created by former Domers in an effort to support currently rostered Notre Dame football players.</p>
          <div className="flex items-center gap-2 mt-4">
            <span className="bg-[#C7D2FC] px-3 rounded-xl font-Sora text-xl text-black">Next.js</span>
            <span className="bg-[#C7D2FC] px-3 rounded-xl font-Sora text-xl text-black">Reactjs</span>
          </div>
          <p className='text-base font-Sora text-[#A1ABBF] my-3'>
            <span className="text-base font-Sora text-[#52DEE5]">Role: </span>FullStack Developer</p>
          <button className="bg-[#52DEE5] py-2 px-5 rounded-md font-Sora text-base text-black">
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Visit</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
