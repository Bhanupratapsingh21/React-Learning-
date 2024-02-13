import React, { useEffect, useCallback, useState } from "react";

function Card({ someobj, channal = "bpss.21" }) {
  const [str, setstr] = useState("hello1");

  const strupdate = useCallback(() => {
    console.log("clicked");
  }, [str]);

  useEffect(() => {
    strupdate();
  }, [str]);

  return (
    <>
      <h1>{someobj.name}</h1>
      <h2>{channal}</h2>
      <button
        onClick={() => {
          setstr("hello");
        }}
      >
        {str}
      </button>
    </>
  );
}


/*function Card({username = "dabo bsdk" , btntext}){
    
    return(
        <div className="relative h-[400px] w-[300px] rounded-md">
  <img
    alt="AirMax Pro"
    className="z-0 h-full w-full rounded-md object-cover"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div className="absolute bottom-4 left-4 text-left">
    <h1 className="text-lg font-semibold text-white">{username}</h1>
    <p className="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      {btntext || "visit me"} →
    </button>
  </div>
</div>
    )
}*/
export default Card