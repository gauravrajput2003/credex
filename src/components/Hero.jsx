import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Turn Unused Software Into Cash</h1>
      <p className="text-lg md:text-2xl mb-6">We help companies sell unused software licenses in minutes.</p>
      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100">
        Sell My Licenses
      </button>
    </section>
  );
};

export default Hero;
