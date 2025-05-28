import { useGSAP } from '@gsap/react';
import React, { useRef } from 'react';
import { animateWithGsap } from '../utils/animations';
import gsap from 'gsap';
import shit from './shit.jpg'; // Импортируем изображение
import sila from './sila.mp4'; // Импортируем видео

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom',
      },
      onComplete: () => {
        videoRef.current.play();
      }
    });

    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap(
      '.g_grow',
      { scale: 1, opacity: 1, ease: 'power1' },
      { scrub: 5.5 }
    );
    animateWithGsap(
      '.g_text',
      { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
    );
  }, []);

  return (
    <section className="h-full bg-zinc relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="mb-12 w-full items-center">
          <h1 id="features_title" className="section-heading text-center">узнайте все о корабле. (просто посмотрев на него).</h1>
          <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[5vh]">
                </div>
                <div className="overflow-hidden flex-1 h-[5vh]">
                </div>
              </div>
          {/* Добавляем изображение после заголовка */}
          <div className="flex justify-center mt-4">
            <img
              src={shit}
              alt="Shit"
              className="max-w-xs w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">ф.и.з.и.к.а.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">сила в дереве.</h2>
            <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[5vh]">
                </div>
                <div className="overflow-hidden flex-1 h-[5vh]">
                </div>
              </div>
            {/* Добавляем видео после текста "сила в дереве." */}
            <div className="flex justify-center mt-4">
              <video
                src={sila}
                playsInline
                className="w-3/4 h-auto rounded-md shadow-lg" // Уменьшаем размер видео
                muted
                autoPlay
                loop // Добавляем loop для бесконечного воспроизведения
              />
            </div>
          </div>

          <div className="flex-center flex-col sm:px-5">
            <div className="relative h-[1vh] w-full flex items-center">
              <video playsInline id="exploreVideo" className="w-full h-full object-cover object-center" preload="none" muted autoPlay ref={videoRef}>
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    наша ф.и.з.и.к.а. это{' '}
                    <span className="text-white">
                      правда ЛУЧШИЙ корабль
                    </span>,
                    возможно, сможет плавать даже там, где воды нет)
                  </p>
                </div>
              </div>
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[10vh]">
                </div>
                <div className="overflow-hidden flex-1 h-[10vh]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
