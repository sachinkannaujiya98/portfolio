import React from "react";
const Work = () => {
  return (
    <div>
      <div className="flex justify-start items-baseline gap-x-4 mt-[10%]">
        <div>
          <h1 className="text-3xl font-[300] text-green-300">My Projects</h1>
        </div>
        {/* <div className='h-[2px] w-1/3 bg-green-400'></div> */}
        <hr className="h-[2px] w-1/3 bg-green-400 block" />
      </div>
      <div className="flex items-top gap-28 mt-6">
        <div className="w-1/2">
          <img className="h-72  w-[623px]" src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="banner" />
        </div>
        <div className="w-1/2" >
          <h5 className="text-green-300 font-[300] text-3xl">Irish Players Club</h5>
          <p className='font-medium text-xl  font-serif text-white'>A NFT collection of 5,555 unique leprechaun NFTs created by former Domers in an effort to support currently rostered Notre Dame football players.</p>
            <div className="flex items-center gap-2 mt-4"><span className="bg-green-300 px-3 rounded-xl text-xl text-pink-500">Next.js</span><span className="bg-green-300 px-3 rounded-xl text-xl text-pink-500">Reactjs</span></div>
            <p className='font-medium text-xl  font-serif text-white pt-3'><span className="text-green-300" >Role:</span>FullStack Developer</p>
            <button  className="bg-green-300 px-3 rounded-xl text-xl text-pink-500">Visit</button>
        </div>
      </div>
      <div className="flex items-top gap-28 mt-6">
        <div className="w-1/2">
          <img className="h-72  w-[623px]" src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="banner" />
        </div>
        <div className="w-1/2" >
          <h5 className="text-green-300 font-[300] text-3xl"> Golf player Club</h5>
          <p className='font-medium text-xl  font-serif text-white'>A NFT collection of 5,555 unique leprechaun NFTs created by former Domers in an effort to support currently rostered Notre Dame football players.</p>
            <div className="flex items-center gap-2 mt-4"><span className="bg-green-300 px-3 rounded-xl text-xl text-pink-500">Next.js</span><span className="bg-green-300 px-3 rounded-xl text-xl text-pink-500">Reactjs</span></div>
            <p className='font-medium text-xl  font-serif text-white pt-3'><span className="text-green-300" >Role:</span>FullStack Developer</p>
            <button  className="bg-green-300 px-3 rounded-xl text-xl text-pink-500">Visit</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
