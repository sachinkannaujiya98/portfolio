import React from "react";
import NodeLogo from "../assets/node.jpg"
import Mongo_DbLogo from "../assets/mongodb.png"
const Skills = () => {
  return (
    <div>
  
      <div className="flex justify-start items-baseline gap-x-4 mt-12">
        <div className="">
          <h1 className="text-3xl font-[300] text-green-300">Skills</h1>
        </div>
        <hr className="h-[2px] w-1/3 bg-green-400 block" />
      </div>
      <div className="flex gap-12 mt-3 items-center">
        <img src="https://www.avneesh.tech/logos/react.svg" alt="react"/>
        <img className="h-32" src="https://www.avneesh.tech/logos/nextjs.svg" alt="next"/>
        <img className="h-32 rounded-full" src={NodeLogo} alt="node"/>
        <img className="h-32 rounded-full" src={Mongo_DbLogo} alt="mongodb"/>
      </div>
    </div>

  );
};

export default Skills;
