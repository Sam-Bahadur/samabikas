import React from "react";
import image from "../../assets/logo/logo.png";

export default function Donation() {
  return (
    <div className="donation relative w-4/5 mx-auto bg-gray-200 p-10 h-screen">
      <img className="absolute md:left-48 opacity-10 h-full" src={image} />
      <div className="font-semibold text-xl max-w-4xl mx-auto text-center">
        Your donation will support a women led community-based organization and
        grassroots leaders to fight against different types of social evils and
        practices and uplift the society. 100% of all donations received by
        SAMABIKAS Nepal are used to support programs in Achham district of Nepal
      </div>
      <div className="font-bold">
        <div className="font-bold text-4xl w-max mx-auto text-mainblue my-2 ">
          Donate us at
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="text-maingreen px-4">
            Account Name: SAMABIKAS Nepal
          </div>
          <div className="text-maingreen px-4">
            Account Number: 0822700650501016
          </div>
          <div className="text-maingreen px-4">
            Bank Name: Agriculture Development Bank
          </div>
          <div className="text-maingreen px-4">Branch: Sanfebagar, Achham</div>
          <div className="text-maingreen px-4">Swift code :- ADBLNPKA</div>
        </div>
      </div>
    </div>
  );
}
