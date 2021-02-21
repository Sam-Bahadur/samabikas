import React from "react";
import image from "../../assets/logo/logo.png";

export default function Donation() {
  return (
    <div className="donation relative w-4/5 mx-auto bg-gray-200 p-10 h-auto">
      <div className="w-min mx-auto">
        <img
          className="h-4/6 md:absolute md:left-1/2 md:top-1/2 opacity-10 z-0"
          style={{ transform: `translate(${-50}%, ${-50}%) ` }}
          src={image}
        />
      </div>
      <div className="font-semibold text-xl max-w-4xl mx-auto text-center z-10">
        Your donation will support a women led community-based organization and
        grassroots leaders to fight against different types of social evils and
        practices and uplift the society. 100% of all donations received by
        SAMABIKAS Nepal are used to support programs in Achham district of Nepal
      </div>

      <div className="font-bold z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-mainblue text-4xl px-4 my-4">Donate Us at</div>
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
