import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const About = () => {
  const textRef = useRef(null);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Temporarily remove scroll logic for testing
    // let scrollTimeout;
    // const handleScroll = () => { ... }
    // window.addEventListener('scroll', handleScroll);
    // return () => { window.removeEventListener('scroll', handleScroll); }
  }, []);

  return (
    <div className="text-white min-h-[500px] flex flex-col justify-center about-bg items-center p-4 md:flex-row font-alegreya">
      <div className="max-w-md text-center p-6">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p ref={textRef} className="text-lg mb-6">
          Step into my culinary experiment!! I’m Ayisha Roobi, a passionate food enthusiast with a background in technology. My true love is cooking and exploring the world with food.
        </p>

        <Link href="/Aboutus">
          <button className="bg-white text-gray-800 py-2 px-4 rounded hover:bg-gray-800 hover:text-white transition-colors duration-300">
            READ MORE
          </button>
        </Link>
      </div>

      <div className="mt-6 md:mt-0 md:ml-6">
        <img
          src="/about.png"
          alt="About Us"
          className="zoomsec w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default About;
