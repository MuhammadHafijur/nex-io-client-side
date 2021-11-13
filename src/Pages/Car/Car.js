import React from "react";
import { Link } from "react-router-dom";

const Car = (props) => {
  const { id, img, title, desc } = props.car;
  return (
    <div className="">
      <div class="bg-gray-200 flex items-center overflow-hidden relative">
        <div class="w-full my-6 max-w-6xl rounded bg-white hover:shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div class="md:flex items-center -mx-10">
            <div class="w-full md:w-1/2 px-10 mb-10 md:mb-0">
              <div class="relative">
                <img src={img} class="w-full relative z-10" alt="" />
                <div class="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>
            <div class="w-full md:w-1/2 px-10">
              <div class="mb-10">
                <h1 class="font-bold uppercase text-2xl mb-5">
                  {title}
                </h1>
                <p class="text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing, elit.
                  Eos, voluptatum dolorum! Laborum blanditiis consequatur,
                  voluptates, sint enim fugiat saepe, dolor fugit, magnam
                  explicabo eaque quas id quo porro dolorum facilis...{" "}
                  <a
                    href="#"
                    class="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
                  >
                    MORE <i class="mdi mdi-arrow-right"></i>
                  </a>
                </p>
              </div>
              <div>
                <div class="inline-block align-bottom mr-5">
                  <span class="text-2xl leading-none align-baseline">$</span>
                  <span class="font-bold text-5xl leading-none align-baseline">
                    59000
                  </span>
                  <span class="text-2xl leading-none align-baseline">.99</span>
                </div>
                <div class="inline-block align-bottom">
                  <Link to={`/purchase/${id}`} class="bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
                    <i class="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
