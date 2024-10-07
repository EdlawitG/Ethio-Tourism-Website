import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="mt-20">
      <Header color={"black"} />

      {/* Main Section */}
      <section className="flex flex-col md:flex-row gap-8 px-4 md:px-8 py-10 md:py-16">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ethiopia is a country of extraordinary natural beauty and deep
            historical significance, offering a unique and diverse tourism
            experience.
          </h2>
          <p className="text-gray-600 mb-4 md:mb-6">
            Ethiopia, often referred to as the "Cradle of Humanity," is a
            destination like no other... With a history that stretches back
            thousands of years and landscapes that range from lush highlands to
            dramatic deserts, it offers travelers an unparalleled adventure.
          </p>
          <p className="text-gray-600">
            We specialize in providing unforgettable experiences in Ethiopia,
            from breathtaking landscapes to rich cultural heritage. As a team
            deeply passionate about showcasing the wonders of Ethiopia, we are
            dedicated to offering travelers the opportunity to explore this
            magnificent land in ways that are immersive, authentic, and
            memorable.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="image8.png"
            alt="Ethiopian Landscape"
            className="rounded-lg shadow-lg max-w-full h-auto md:h-[685px] md:w-[667px]"
          />
        </div>
      </section>

      {/* Discover Ethiopia Section */}
      <section className="text-center px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-8">Discover Ethiopia</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-20 lg:px-60 py-10">
          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src="image1.png"
              alt="Afar, Ethiopia"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-[#AF3700]">
                Afar, Ethiopia
              </h3>
              <p className="text-gray-600 my-4">
                Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu
                commodo sed in platea amet nec.
              </p>
              <Link
                to="/explore"
                className="text-[#AF3700] font-semibold hover:underline"
              >
                Explore
              </Link>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src="image0.png"
              alt="Mekele, Ethiopia"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-[#AF3700]">
                Mekele, Ethiopia
              </h3>
              <p className="text-gray-600 my-4">
                Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu
                commodo sed in platea amet nec.
              </p>
              <Link
                to="/explore"
                className="text-[#AF3700] font-semibold hover:underline"
              >
                Explore
              </Link>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg overflow-hidden">
            <img
              src="image9.png"
              alt="Gonder, Ethiopia"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg md:text-xl font-semibold text-[#AF3700]">
                Gonder, Ethiopia
              </h3>
              <p className="text-gray-600 my-4">
                Lorem ipsum dolor sit amet consectetur. Ut non vitae arcu
                commodo sed in platea amet nec.
              </p>
              <Link
                to="/explore"
                className="text-[#AF3700] font-semibold hover:underline"
              >
                Explore
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
