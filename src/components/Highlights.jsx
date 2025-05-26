import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ilya from './ilya.jpg';
import max from './max.jpg';

const Highlights = () => {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 });
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full bg-zinc">
      <div className="screen-max-width">
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
            </div>
          </div>
        </div>
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">создатель этого сайта - один из создателей ф.и.з.и.к.и. (нет, не предмета).</h1>
        </div>
        <div className="flex justify-center space-x-2 mt-2"> {}
          <img src={ilya} alt="Ilya" className="max-w-xs h-auto rounded-md shadow-lg" />
          <img src={max} alt="Max" className="max-w-xs h-auto rounded-md shadow-lg" />
        </div>
        <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[10vh]">
                </div>
                <div className="overflow-hidden flex-1 h-[10vh]">
                </div>
              </div>
      </div>
    </section>
  );
}

export default Highlights;
