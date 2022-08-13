import React from "react";
import NodeLogo from "../../assets/node.jpg"
import Mongo_DbLogo from "../../assets/mongodb.png"
import Scrollcontent from "../aos/content";
const Skills = () => {
  return (
    <div id="skills">
      <Scrollcontent>
        <div className="flex justify-start items-center gap-x-4 my-12">
          <div className="">
            <h1 className="text-3xl font-[300]  text-[#A1ABBF]"><span className='text-[#52DEE5]'>04. </span>Skills</h1>
          </div>
          <hr className="h-[2px] w-1/3 bg-[#A1ABBF] block" />
        </div>
      </Scrollcontent>
      <div className="flex flex-wrap justify-center gap-12 mt-3 items-center">
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer"><img className="h-24 hover:scale-125 delay-150" src="https://www.avneesh.tech/logos/react.svg" alt="react" /></a>
        <a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img className="h-24 hover:scale-125 delay-150" src=" https://www.avneesh.tech/logos/nextjs.svg" alt="next" /></a>
        <a href="https://nodejs.org/" target="_blank" rel="noreferrer"> <img className="h-24 hover:scale-125 delay-150 rounded-full" src={NodeLogo} alt="node" /></a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img className="h-24 hover:scale-125 delay-150 rounded-full" src={Mongo_DbLogo} alt="mongodb" /></a>
      </div>
    </div>

  );
};

export default Skills;
