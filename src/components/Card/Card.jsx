// Card.js

import { Button } from "@mui/material";
import React from "react";

const Card = (props) => {
  return (
    <div class="bg-[#ebd9d9] border rounded-xl mx-16 my-4 px-1 py-1 shadow-sm sm:flex">
      <div class="flex-shrink-0 relative w-full h-full rounded-t-xl overflow-hidden pt-[20%] sm:rounded-s-xl sm:max-w-[15rem] md:rounded-se-none md:max-w-xs">
        <img
          class="l absolute top-0 start-0 object-cover"
          src={props.image}
          alt="Image Description"
        />
      </div>
      <div class="flex flex-wrap">
        <div class="p-1 flex flex-col h-full sm:p-7">
          <h3 class="text-lg font-bold text-gray-800 ">{props.title}</h3>
          <p class="mt-1 text-gray-500 dark:text-gray-900">
            Quantity: {props.quantity}
          </p>
          <p class="mt-1 text-gray-500 dark:text-gray-900">
            Address: {props.address}
          </p>
          <p class="mt-1 text-gray-500 dark:text-gray-900">
            Quality: {props.quality}
          </p>
          <div class=" sm:mt-auto">
            <p class="my-7 text-xs text-gray-500 dark:text-gray-500">
              Time: {props.time} Ago
            </p>
          </div>
        </div>
      
      </div>
      <button className="h-10  block ml-auto w-40 my-20  mx-4 text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
            Contact Now
          </button>
        
    </div>
  );
};

export default Card;