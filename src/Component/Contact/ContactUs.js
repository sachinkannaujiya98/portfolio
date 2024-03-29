import React from "react";
import Scrollcontent from "../aos/content";

const ContactUs = () => {
  return (
    <div id="contact">
      <Scrollcontent>
        <div className="flex items-center justify-center mt-12 gap-4">
          <div className="h-[2px] w-1/4 bg-[#A1ABBF]"></div>
          <h1 className="text-4xl text-[#A1ABBF]">ContactUs</h1>
          <div className="h-[2px] w-1/4 bg-[#A1ABBF]"></div>
        </div>
      </Scrollcontent>
      <div className="flex justify-center flex-wrap items-center gap-12 mt-12">
        <button className=" border-2 border-[#52DEE5] text-[#52DEE5] py-2 px-5 rounded-md font-Sora text-basecursor-pointer">Github</button>
        <button className=" border-2 border-[#52DEE5] text-[#52DEE5] py-2 px-5 rounded-md font-Sora text-basecursor-pointer">Github</button>
        <button className=" border-2 border-[#52DEE5] text-[#52DEE5] py-2 px-5 rounded-md font-Sora text-basecursor-pointer">Github</button>
        <button className=" border-2 border-[#52DEE5] text-[#52DEE5] py-2 px-5 rounded-md font-Sora text-basecursor-pointer">Github</button>
      </div>
    </div>
  );
};

export default ContactUs;
