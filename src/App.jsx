// import { products } from "../src/Components/Data/Data";

import { useState } from "react";
import "./App.css";

function App() {
  // const [id, name] = products;
  // const priceRange=document.getElementById("nuy")
  // console.log(priceRange)
  const [price,setPrice]=useState()

  return (
    <>
      <div className="w-full">
        <div className="w-[96%] md:w-[94%] mx-auto py-5 relative">
          <div className="flex h-[500px] gap-5">
            <div className="left w-[30%] md:w-[20%] h-full border-gray-700 border absolute md:relative md:block hidden py-2">
              {/* put filterValue in state then filter according to filterValue */}
              <div className="price-section bg-slate-200 mb-4 px-2">
                <p className="font-bold text-xl">Price</p>
                <hr className="border border-blue-200" />

                <input type="range" name="priceRange" id="priceRange" max={100} min={20} />
                <p className="value">`Price between: $${priceRange}`</p>
              </div>
              <div className="price-section bg-slate-200 mb-4 px-2">
                <p className="font-bold text-xl">Price</p>
                <hr className="border border-blue-200" />

                <input type="checkbox" name="" id="category" />
                <label htmlFor="category">Hello</label>
              </div>
              <div className="price-section bg-slate-200 mb-4 px-2">
                <p className="font-bold text-xl">Price</p>
                <hr className="border border-blue-200" />

                <input type="checkbox" name="" id="isAvialable" />
                <label htmlFor="isAvialable">Hello</label>
              </div>
              <div className="price-section bg-slate-200 mb-4 px-2">
                <p className="font-bold text-xl">Price</p>
                <hr className="border border-blue-200" />

                <input type="checkbox" name="" id="hello" />
                <label htmlFor="hello">Hello</label>
              </div>
            </div>
            <div className="right w-[100%] md:w-[80%] border-gray-700 border"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
