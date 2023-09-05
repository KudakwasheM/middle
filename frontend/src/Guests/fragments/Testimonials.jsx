import React, { useEffect, useState } from "react";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axiosClient from "../../axiosClient";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTestimonials = async () => {
    setLoading(true);
    await axiosClient
      .get("/testimonials")
      .then((res) => {
        setLoading(false);
        console.log(res?.data?.testimonials);
        setTestimonials(res?.data?.testimonials);
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err?.response?.message);
      });
  };
  const slides = [
    {
      title: "Kudakwashe Masaya",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nulla, veritatis provident sit, dolorum reiciendis porro cum libero sequi vero animi hic sunt, omnis earum id magnam necessitatibus et odio? Voluptatem iste dicta rerum at quia esse ipsum et sapiente ad nemo, molestiae voluptatum repellat, explicabo nisi reprehenderit facere obcaecati ea. Fugit, cupiditate nisi? Inventore labore eveniet eius perferendis obcaecati?",
    },
    {
      title: "Tinotenda Something",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nulla, veritatis provident sit, dolorum reiciendis porro cum libero sequi vero animi hic sunt, omnis earum id magnam necessitatibus et odio? Voluptatem iste dicta rerum at quia esse ipsum et sapiente ad nemo, molestiae voluptatum repellat, explicabo nisi reprehenderit facere obcaecati ea. Fugit, cupiditate nisi? Inventore labore eveniet eius perferendis obcaecati?",
    },
    {
      title: "Keith Mbofana",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In nulla, veritatis provident sit, dolorum reiciendis porro cum libero sequi vero animi hic sunt, omnis earum id magnam necessitatibus et odio? Voluptatem iste dicta rerum at quia esse ipsum et sapiente ad nemo, molestiae voluptatum repellat, explicabo nisi reprehenderit facere obcaecati ea. Fugit, cupiditate nisi? Inventore labore eveniet eius perferendis obcaecati?",
    },
  ];

  useEffect(() => {
    getTestimonials();
  }, []);
  return (
    <div className="bg-[rgba(0,223,154,0.05)] py-10">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col">
        <h2 className="text-3xl font-semibold mb-3">What Our Customers Say</h2>
        <p className="text-center mb-5">
          Read on what our investors and enterpreneurs say abuot us
        </p>
        <div className="flex-1">
          {/* <Testimonial slides={testimonials} /> */}
        </div>
        <div className="">
          <Link className="py-2 px-3 bg-[rgba(0,223,154,0.75)] hover:bg-[rgba(0,223,154,1)] text-white rounded">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
