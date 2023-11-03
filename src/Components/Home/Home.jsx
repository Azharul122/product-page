// import React from "react";
import { useState } from "react";
import { products } from "../Data/Data";
import { Link, NavLink } from "react-router-dom";
import { FaStar, FaHamburger } from "react-icons/fa";

const Home = () => {
  // const priceRange = document.getElementById("hello");

  const categories = [...new Set(products.map((product) => product.category))];
  const Avialabilities = [
    ...new Set(products.map((product) => product.available)),
  ];
  const ratings = [1, 2, 3, 4];
  const [price, setPrice] = useState(100);
  const [ratingValue, setRetingValue] = useState("");
  const [category, setCategory] = useState("");
  const [isAvialable, setIsavilable] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const filteredProducts = sortedProducts.filter((product) => {
    return (
      product.price <= price &&
      (product.available == isAvialable || isAvialable == "") &&
      ((product.rating > ratingValue && product.rating <= ratingValue + 1) ||
        ratingValue == "") &&
      (product.category == category || category == "")
    );
  });

  const totalProducts = filteredProducts.length;
  const limit = 6;
  const indexOfLastPage = limit * currentPage;
  const indexOfFirstPage = indexOfLastPage - limit;

  const perPageProduct = [...filteredProducts].slice(
    indexOfFirstPage,
    indexOfLastPage
  );
  console.log(perPageProduct);

  const handleClickRating = (rating) => {
    setRetingValue(rating);
  };

  const handleSort = (value) => {
    if (value == "hightolow") {
      setSortedProducts([...products].sort((a, b) => b.price - a.price));
    } else if (value == "lowtohigh") {
      setSortedProducts([...products].sort((a, b) => a.price - b.price));
    }
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(sortedProducts);

  return (
    <div>
      <div className="w-full">
        <div className="w-[96%] md:w-[94%] mx-auto py-5 relative">
          <div className="flex  gap-5">
            <div className="left w-[30%] md:w-[20%] h-full   absolute md:relative md:block hidden py-2">
              {/* put filterValue in state then filter according to filterValue */}
              <div className="price-section bg-[#fff] mb-4 px-2" id="nuy">
                <p className="font-bold text-xl pb-2">Price</p>
                <hr className="border border-blue-200" />

                <input
                  type="range"
                  name="priceRange"
                  id="priceRange"
                  max={100}
                  min={20}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                <p className="value">Price between: ${price}</p>
              </div>
              <div className="price-section bg-[#fff] mb-4 px-2">
                <p className="font-bold text-xl pb-2">Categories</p>
                <hr className="border border-blue-200" />

                {categories.map((category) => (
                  <div
                    className=""
                    key={category}
                    onClick={() => setCategory(category)}
                  >
                    <Link to={`/`}>{category}</Link>
                    <br />
                  </div>
                ))}
              </div>
              {/* Avialability */}

              <div className="price-section bg-[#fff] mb-4 px-2">
                <p className="font-bold text-xl pb-2">Avialabilities</p>
                <hr className="border border-blue-200" />

                {Avialabilities.map((available) => (
                  <div
                    className=""
                    key={available}
                    onClick={() => setIsavilable(available)}
                  >
                    <Link to={`/`}>
                      {available == true ? "available" : "Out of stock"}
                    </Link>
                    <br />
                  </div>
                ))}
              </div>
              {/* Rating */}
              <div className="price-section bg-[#fff] mb-4 px-2">
                <p className="font-bold text-xl pb-2">Rating</p>
                <hr className="border border-blue-200" />

                {ratings.map((rating) => (
                  <div
                    value={rating}
                    key={rating}
                    className="flex items-center cursor-pointer"
                    onClick={() => handleClickRating(rating)}
                  >
                    <p>{rating == 4 ? "Above 4" : rating}</p>
                    <FaStar className="text-orange-400" />
                  </div>
                ))}
              </div>
            </div>
            {/* right */}
            <div className="right w-[100%] md:w-[80%]  md:p-3">
              <div className="top-filter-container flex items-center justify-between py-5 mb-2 bg-white px-2">
                <FaHamburger className="md:hidden" />
                <div className="Sort flex items-center gap-4">
                  <label
                    htmlFor="select"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Sort:
                  </label>
                  <select
                    onChange={(e) => handleSort(e.target.value)}
                    id="selectSortValue"
                    className="block w-full border rounded-lg  text-gray-700 bg-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="" className="block">
                      Select
                    </option>
                    <option value="hightolow">Price high to Low</option>
                    <option value="lowtohigh">Price low to high</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
              <div className="product-container grid grid-cols-1 md:grid-cols-3 gap-2">
                {perPageProduct.map((fp) => (
                  <div
                    className="p-2 bg-[#fff] hover:shadow-xl hover:border relative"
                    key={fp.id}
                  >
                    <img src={fp.image[0]} alt="" />
                    <p className="font-bold">{fp.name}</p>
                    <p className="text-sm pb-7">{fp.description}</p>
                    <p className="text-red-400 text-xl bottom-2 absolute ">
                      <span className="font-bold text-2xl">৳</span>
                      {fp.price}
                    </p>
                  </div>
                ))}
              </div>
              {/* pagination */}
              <div className="pt-5">
                {totalProducts > limit && (
                  <div className="flex items-center gap-2">
                    {Array(Math.ceil(filteredProducts.length / limit))
                      .fill()
                      .map((_, index) => (
                        <NavLink key={index}>
                          <button
                            className={`px-4 bg-gray-200 text-xl ${
                              index + 1 === currentPage
                                ? "bg-[#496f78] text-black font-bold"
                                : ""
                            }`}
                            onClick={() => paginate(index + 1)}
                          >
                            {index + 1}
                          </button>
                        </NavLink>
                      ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
