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
      <section className="px-8 py-16 grid md:grid-cols-3 gap-10">
        <div className="space-y-8 text-center">
          <div className="flex gap-40">
            <h2 className="text-2xl text-left font-bold text-[#AF3700]">
              Our Recommendation
            </h2>
            <Link to="/about" className="bg-[#AF3700] text-white rounded-lg flex gap-2 px-5 py-3 justify-center items-center">
              <svg
                className="w-[24px] h-[24px] text-gray-700"
                style={{ color: "white" }}
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
          <div className="border rounded-lg shadow-lg overflow-hidden w-[320px] h-[430px]">
            <img
              src="image1.png"
              alt="Afar, Ethiopia"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#AF3700]">
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

          <div className="border rounded-lg shadow-lg overflow-hidden w-[320px] h-[430px]">
            <img
              src="image0.png"
              alt="Mekele, Ethiopia"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#AF3700]">
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

          <div className="border rounded-lg shadow-lg overflow-hidden w-[320px] h-[430px]">
            <img
              src="image9.png"
              alt="Gonder, Ethiopia"
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#AF3700]">
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

        <div className="col-span-2 space-y-8">
          {/* <button className="bg-[#AF3700] text-white px-9 py-2 rounded-lg">
            Back
          </button> */}
          <div className="relative">
            <video
              ref={videoRef}
              poster="image4.png"
              className="rounded-lg shadow-lg object-cover w-full h-[450px]"
              controls={isPlaying}
            >
              <source src="/path/to/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {!isPlaying && (
              <button
                onClick={handleVideoPlay}
                className="absolute inset-0 w-20 h-20 flex items-center justify-center bg-white text-[#AF3700] rounded-full p-7 m-auto"
                style={{
                  top: "100px",
                  left: "70px",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <svg
                  className="w-16 h-16 fill-current text-[#AF3700]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 22V2l18 10-18 10z" />
                </svg>
              </button>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-4xl font-bold m-10 text-center">
                Make Your Next Tour To Gonder, Ethiopia
              </h2>
              <p className="text-gray-600 mb-6 text-[16px]">
                Gonder, located in northern Ethiopia, is a city steeped in
                history and cultural significance. Known as the "Camelot of
                Africa," Gonder was once the capital of the Ethiopian Empire and
                is renowned for its impressive collection of castles, churches,
                and royal ruins.
              </p>
              <p className="text-gray-600">
                For nature lovers, the Simien Mountains National Park, located a
                short distance from Gonder, offers breathtaking landscapes and
                incredible biodiversity. The park is home to rare wildlife
                species, including the charismatic Ethiopian wolf and the Gelada
                baboon. Hiking through the rugged terrain rewards visitors with
                awe-inspiring vistas and the chance to spot these unique
                creatures in their natural habitat.
              </p>
            </div>
            <img
              src="image9.png"
              alt="Gonder Landscape"
              className="rounded-lg shadow-lg w-full h-[633px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
