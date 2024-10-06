import React, { useRef, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Explore = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="mt-10">
      <Header color={"black"} />
      <section className="px-4 md:px-8 py-10 md:py-16 grid md:grid-cols-3 gap-8">
        {/* Left Section with Recommendations */}
        <div className="space-y-8 text-center md:text-left">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-[#AF3700]">
              Our Recommendation
            </h2>
            <Link
              to="/about"
              className="bg-[#AF3700] text-white rounded-lg flex gap-2 px-4 py-2 md:px-5 md:py-3 items-center"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back
            </Link>
          </div>

          {/* Recommendation Cards */}
          <div className="border rounded-lg shadow-lg overflow-hidden w-full max-w-xs mx-auto md:mx-0">
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
              <button className="text-[#AF3700] font-semibold hover:underline">
                Explore
              </button>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg overflow-hidden w-full max-w-xs mx-auto md:mx-0">
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
              <button className="text-[#AF3700] font-semibold hover:underline">
                Explore
              </button>
            </div>
          </div>

          <div className="border rounded-lg shadow-lg overflow-hidden w-full max-w-xs mx-auto md:mx-0">
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
              <button className="text-[#AF3700] font-semibold hover:underline">
                Explore
              </button>
            </div>
          </div>
        </div>

        {/* Video and Text Section */}
        <div className="col-span-2 space-y-8">
          {/* Video Section */}
          <div className="relative">
            <video
              ref={videoRef}
              poster="image4.png"
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-[450px]"
              controls={isPlaying}
            >
              <source src="/path/to/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                onClick={handleVideoPlay}
                className="absolute inset-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white text-[#AF3700] rounded-full p-5 md:p-7"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <svg
                  className="w-12 h-12 md:w-16 md:h-16 fill-current text-[#AF3700]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 22V2l18 10-18 10z" />
                </svg>
              </button>
            )}
          </div>

          {/* Text and Image Section */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
                Make Your Next Tour To Gonder, Ethiopia
              </h2>
              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Gonder, located in northern Ethiopia, is a city steeped in
                history and cultural significance. Known as the "Camelot of
                Africa," Gonder was once the capital of the Ethiopian Empire and
                is renowned for its impressive collection of castles, churches,
                and royal ruins.
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                For nature lovers, the Simien Mountains National Park, located a
                short distance from Gonder, offers breathtaking landscapes and
                incredible biodiversity. The park is home to rare wildlife
                species, including the charismatic Ethiopian wolf and the Gelada
                baboon.
              </p>
            </div>
            <img
              src="image9.png"
              alt="Gonder Landscape"
              className="rounded-lg shadow-lg w-full h-64 md:h-[633px] object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
