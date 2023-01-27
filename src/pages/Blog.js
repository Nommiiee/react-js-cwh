import React from "react";

export default function Blog() {




  const truncateString = (e) => {
    console.log(e)
      if(e.target.innerText.length > 200){
        e.target.innerText = e.target.innerText.substring(0, 100) + "...";
      } else{
        return e.target.innerText;
      }
  };

  return (
    <>
      <div className="w-full h-full flex items-center justify-center flex-col">
        <div className="w-full h-full max-w-6xl overflow-x-hidden ">
          <div className="mt-10">
            <h1 className="text-center text-3xl font-serif font-semibold">
              This is the start of the blog page.
            </h1>
          </div>
          <ul className="flex flex-col justify-center items-center gap-y-10">
            <li className="w-full h-full shadow-xl rounded-xl cursor-pointer overflow-hidden">
              <div className="w-full flex items-center p-4 ">
                  <div className="w-full flex items-center gap-x-6">
                      <div className="  w-48 justify-center flex items-center" >
                        <img className=" rounded-full " alt="" src="https://randomuser.me/api/portraits/women/67.jpg" />
                      </div>
                      <div className=" w-full  ">
                        <h1 className="text-2xl font-semibold">
                          Hello world!
                        </h1>
                        <div className="text-md text-gray-500 font-semibold w-full ">
                        <span className="" >
                        Auther: John Doe, Post on: 12/12/2023 
                        </span>
                        </div>
                        <p className="text-base max-h-24  max-w-max summary-container" onLoad={truncateString}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        </p>
                      </div>  
                  </div>
              </div>
            </li>
            
          </ul>

        </div>
      </div>
    </>
  );
}
