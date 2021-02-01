import React from "react";
import partner1 from "../../assets/images/partners/partner1.jpg";
import partner2 from "../../assets/images/partners/partner2.png";
import partner3 from "../../assets/images/partners/partner3.png";
import partner4 from "../../assets/images/partners/partner4.jpg";

export default function Partners() {
  return (
    <div className="my-4">
      <h1 className="text-mainblue text-center text-3xl font-bold uppercase ">
        Partners
      </h1>
      <div className="flex flex-wrap md:flex-nowrap justify-center my-4">
        <img className="w-20 h-18 md:w-48 md:h-28 mx-1 " src={partner1} />
        <img className="w-20 h-18 md:w-40 md:h-28 mx-1" src={partner2} />
        <img className="w-20 h-18 md:w-40 md:h-28 mx-1" src={partner3} />
        <img className="w-20 h-18 md:w-40 md:h-28 mx-1" src={partner4} />
      </div>
    </div>
  );
}
