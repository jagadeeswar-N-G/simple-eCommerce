import React, { useContext, useState, useRef, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router";
import Products from "./Products";
import axios from "axios";

function ProductDescription(data) {
  const [products, setProducts] = useState([]);
  const allProducts = useRef([]);

  const { user } = useParams();
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

  const productData = products.find((items) => items.id == user);

 console.log(user);
  return (
    <div>
      <section>
        <Header />

        <section class="text-gray-700 body-font overflow-hidden bg-white">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={productData?.image}
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-md title-font text-gray-500 tracking-widest">
                  {productData?.category}
                </h2>
                <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                  {productData?.title}
                </h1>
                <p class="leading-relaxed">
                {productData?.description}
                </p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                 
                </div>
                <div class="flex justify-between">
                  <span class="title-font font-medium text-2xl text-gray-900">
                    ${productData?.price}
                  </span>
                  <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    <svg
                      fill="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                    </svg>
                  </button>
                </div>
                <div className="p-2">
                    <button className="w-full text-center py-3 my-4 text-balck border-2 rounded-none border-black hover:text-white hover:bg-black">
                      add to cart
                    </button>
                    <button className="w-full text-center py-3  text-balck border-2 rounded-none border-black hover:text-white hover:bg-black">
                      buy now
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default ProductDescription;
