import React, { createContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
// import shirt from "../Assets/shirt.jpg";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ProductDescription from "./ProductDescription";

function Products() {
  const productData = createContext();
  const [products, setProducts] = useState([]);
  const allProducts = useRef([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        allProducts.current = response?.data || [];
        setProducts(allProducts?.current);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "lowToHigh") {
      const sorted = [...products].sort((a, b) => a.price - b.price);
      setProducts(sorted);
    } else if (selectedOption === "highToLow") {
      const sorted = [...products].sort((a, b) => b.price - a.price);
      setProducts(sorted);
    }
  };

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredProducts = selectedCategory
    ? allProducts?.current.filter(
        (product) => product.category === selectedCategory
      )
    : products;
  useEffect(() => setProducts(filteredProducts), [handleCategoryChange]);

  return (
    <div>
      <div>
        <div className="flex justify-between">
          <select
            onChange={handleSort}
            id="countries"
            class="ml-10 my-6 bg-gray-50 outline-none border border-black text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected disabled>
              Sort by price
            </option>
            <option value="lowToHigh">Low To High</option>
            <option value="highToLow">High TO Low</option>
          </select>
          <select
            onChange={handleCategoryChange}
            id="countries"
            class="mr-10 my-6 bg-gray-50 outline-none border border-black text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-1/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Select the category</option>
            <option value="men's clothing">men's clothing</option>
            <option value="women's clothing">women's clothing</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
          </select>
        </div>
        <section className="p-10">
          <div className="grid grid-cols-4 gap-3">
            {products?.map((product, index) => (
              <>
                <section className="w-full border">
                  <div className="flex items-center justify-between p-2">
                    <div>{product?.title}</div>
                  </div>
                  <hr />
                  <Link to={`/home/${product?.id}`}>
                    <div className=" ">
                      <img
                        src={product?.image}
                        alt="shirt"
                        className="h-[300px]"
                      />
                    </div>
                  </Link>
                  <div className="p-2">
                    <p>{product?.category}</p>
                    <p className="text-xl font-mono font-semibold">
                      ${product?.price}
                    </p>
                  </div>
                  
                </section>
              </>
            ))}
          </div>
        </section>
      </div>
      <div className="hidden">
      <ProductDescription data= {products}/>
      </div>
      
    </div>
  );
}

export default Products;
