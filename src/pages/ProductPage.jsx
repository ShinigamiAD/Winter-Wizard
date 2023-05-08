import React from 'react';
import Annoucne from '../components/Announce';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Counter from '../components/Counter';

const ProductPage = () => {
  return (
    <div>
      <Annoucne />
      <Navbar />
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className="product_img"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            Cream Hoody Orignal
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            Hoodie in sweatshirt fabric made from a cotton blend. Regular fit
            with a lined, drawstring hood, print motif on the front, kangaroo
            pocket and ribbing at the cuffs and hem. Soft brushed inside.
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-7 text-3xl">
              Price: <b>$70</b>
            </p>

            <div className="colors flex mt-7 text-2xl">
              Colors
              <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
              <div className="bg-blue-600  w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3] "></div>
              <div className="bg-yellow-400  w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3] "></div>
            </div>

            <div className="mt-7 text-2xl">
              Size
              <select className="border-[2px] border-silver rounded-md ml-5">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
            <div className="mt-7">
              <Counter />
            </div>
          </div>

          <button className="btn text-white  rounded-md shadow-md mt-[30px] p-3">
            Add to Cart
          </button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
