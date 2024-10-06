import React from "react";

const Banner = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('https://xdayaan.sirv.com/background.webp')" }}
    >
      <div className="container mx-auto px-6 text-center text-white">
        {/* Title */}
        <h1 className="text-5xl font-bold leading-tight md:text-6xl">
          Visualize Space Science
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Explore space-based biological experiments conducted on the International Space Station.
        </p>

        {/* Call to Action Buttons for Experiments */}
        <div className="mt-8 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row justify-center">
          <a
            href="/experiments?id=0"
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Rodent Research Reference Mission-1
          </a>

          <a
            href="/experiments?id=1"
            className="bg-white text-indigo-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition duration-300"
          >
            Rodent Research-23 Mission
          </a>
        </div>

      
      </div>
    </div>
  );
};

export default Banner;
