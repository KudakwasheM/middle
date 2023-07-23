import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineHome,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-[#000300] py-16 text-white">
      <div className="max-w-[1100px] mx-auto grid">
        <div className="flex-col">
          <div className="flex flex-col">
            <h2 className="text-[rgb(0,223,154)] text-3xl font-bold">
              Middle.
            </h2>
          </div>
          <p className="text-xl font-medium text-[rgb(0,223,154)]">
            Follow Us On:
          </p>
          <div className="flex-col">
            <div className="flex items-center my-3 pl-3">
              <span className="md:mr-2 text-[rgb(29,161,242)]">
                <AiOutlineTwitter size={25} />
              </span>
              <p>Twitter</p>
            </div>
            <div className="flex items-center my-3 pl-3">
              <span className="md:mr-2 text-[rgb(66,103,178)]">
                <AiOutlineFacebook size={25} />
              </span>
              <p>Facebook</p>
            </div>
            <div className="flex items-center my-3 pl-3">
              <span className="md:mr-2">
                <AiOutlineInstagram size={25} />
              </span>
              <p>Instagram</p>
            </div>
          </div>
        </div>

        <div className="flex-col">
          <p className="text-xl font-medium text-[rgb(0,223,154)]">
            Contact Us On:
          </p>
          <div className="flex-col">
            <div className="flex items-center my-3 pl-3">
              <span className="md:mr-2 text-[rgb(0,223,154)]">
                <AiOutlineMail size={25} />
              </span>
              <p>email@middle.co.zw</p>
            </div>
            <div className="flex items-center my-3 pl-3">
              <span className="md:mr-2 text-[rgb(0,223,154)]">
                <AiOutlinePhone size={25} />
              </span>
              <p>+263 777 777 7777</p>
            </div>
            <div className="flex items-center my-3 pl-3">
              <span className="md:mr-2 text-[rgb(0,223,154)]">
                <AiOutlineHome size={25} />
              </span>
              <p>13 Mukombe Street Zengeza 2, Chitungwiza, Harare</p>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
