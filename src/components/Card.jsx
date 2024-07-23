import React from "react";

export default function Card({ cardItems }) {
  return (
    <div className=" flex items-center p-2 gap-4 flex-wrap justify-center">
      {cardItems.map((item, index) => (
        <div key={index}  className="m-2 flex flex-col items-start">
          <img
            src={item.imgSrc}
            className="w-96 h-100 object-cover rounded-lg"
          />
           <h2 className="sm:text-lg text-sm font-semibold pt-4">{item.title}</h2>
      <p className="sm:text-md text-sm font-light">{item.desc}</p>
      <p className="bg-blue-400 rounded-lg px-4 text-sm font-light py-1">4.7</p>
        </div>
      ))}
     
    </div>
  );
}
