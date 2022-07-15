import React from "react";

const ContactUs = () => {
  return (
    <div>
      <div className="flex items-center justify-center mt-12 gap-4">
        <div className="h-[2px] w-1/4 bg-green-400"></div>
        <h1 className="text-3xl font-[300] text-green-300">ContactUs</h1>
        <div className="h-[2px] w-1/4 bg-green-400"></div>
      </div>
      <div className="flex justify-center items-center gap-12 mt-12"><span className="rounded-md pl-9 pr-9 text-xl border-pink-400 border-2 cursor-pointer">Github</span><span className="rounded-md pl-9 pr-9 text-xl border-pink-400 border-2 cursor-pointer">Github</span><span className="rounded-md pl-9 pr-9 text-xl border-pink-400 border-2 cursor-pointer">Github</span><span className="rounded-md pl-9 pr-9 text-xl border-pink-400 border-2 cursor-pointer">Github</span></div>
    </div>
  );
};

export default ContactUs;
