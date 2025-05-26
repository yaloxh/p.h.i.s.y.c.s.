import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import logo from './logo.mp4';

const Hero = () => {

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 2 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex flex-col items-center justify-center">
        <p
          id="hero"
          className="hero-title opacity-0 text-white text-4xl font-bold mb-4"
        >
          ф.и.з.и.к.а.
        </p>
        <div className="flex justify-center w-full mt-8">
          <video
            src={logo}
            autoPlay
            muted
            loop
            playsInline
            className="max-w-xs w-full h-auto rounded-md shadow-lg"
            controls={false}
          >
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 mt-6"
      >
        <p className="font-normal text-xl text-white">абсолютно бесплатно.</p>
      </div>
    </section>
  );
}

export default Hero;
