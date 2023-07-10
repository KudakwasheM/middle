import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="w-full  bg-gradient-to-b from-[#000300] via-[#000300] py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="my-4 text-center sm:text-left">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2 text-[rgb(0,223,154)]">
            Want to have a chat with us?
          </h1>
          <p className="text-white">Contact us on any platform below</p>
        </div>
        <div className="w-full flex flex-col sm:flex-row justify-around items-center mx-auto my-4">
          <div className="bg-white w-[250px] h-[250px] text-center p-4">
            <AiOutlinePhone
              size={100}
              className="mx-auto text-[rgb(0,223,154)]"
            />
            <p className="my-6">Call us on:</p>
            <a href="tel:+263777492142">+263777492142</a>
          </div>
          <div className="bg-white w-[250px] h-[250px] text-center p-4 m-4 sm:m-0">
            <AiOutlineMail
              size={100}
              className="mx-auto text-[rgb(0,223,154)]"
            />
            <p className="my-6">Email us on:</p>
            <a href="mailto:masayakudakwashe@gmail.com">
              masayakudakwashe@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
