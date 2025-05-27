import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';
import phisycs from './phisycs.mp4'; // Import the video
import cat from './cat.gif'; // Import the image

const HowItWorks = () => {

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom'
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    });

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
  

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            ф.и.з.и.к.а.
            <br /> реально монстр.
          </h2>

          <p className="hiw-subtitle">
            вот он.
          </p>

          <div className="flex justify-center mt-4">
            <video
              src={phisycs}
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

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
            </div>
          </div>
        </div>

        <div className="hiw-text-container">
          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-text">абсолютно новый</p>
            <p className="hiw-bigtext">експириенс</p>
            <p className="hiw-text">катания на лодочках.</p>
            <p className="hiw-bigtext">ф.и.з.и.к.а.</p>
          </div>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            признайтесь, это же вы снизу)
          </h2>
          {/* Image Element */}
          <div className="flex justify-center mt-4">
            <img
              src={cat}
              alt="Cat"
              className="max-w-xs w-full h-auto rounded-md shadow-lg"
            />
          </div>
        </div>
        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            немного инфы о проекте:
          </h2>
          <div className="mt-2 md:mt-4 mb-4">
            <div className="relative h-full flex-center">
              <div className="overflow-hidden">
              </div>
            </div>
          </div>
          <p className="hiw-text">
            создатели проекта: кудрявцев илья и милосердов максим. к первому дню проектной недели у нас не было ничего готового, кроме как идеи) в первый день мы сделали чертеж, начали делать плакат с которого вы скорее всего и узнали про этот сайт, который мы полностью сделали в первый день. вечером первого дня илья сделал тестовый прототип судна, который мы успешно запустили во второй день. во второй, третий и четвертый день мы продолжили работу над проектом, что позволило в четвертый день успешно запустить регату и в пятницу защитить наш проект. ну а поскольку этот блок текста кажется каким-то маленьким, далее будут 100 случайных слов: яблоко, дом, солнце, шуруповерт, река, книга, машина, цветок, собака, кошка, птица, дерево, море, гора, звезда, небо, дождь, снег, ветер, огонь, свет, тень, земля, камень, трава, луна, утро, вечер, ночь, день, радость, грусть, счастье, любовь, дружба, работа, игра, музыка, фильм, искусство, культура, наука, знание, мудрость, сила, свобода, мир, война, жизнь, смерть, время, пространство, мысль, идея, мечта, цель, успех, провал, опыт, ошибка, решение, вопрос, ответ, правда, ложь, надежда, вера, страх, смех, слезы, улыбка, грусть, печаль, радость, счастье, праздник, событие, встреча, прощание, путешествие, приключение, история, сказка, легенда, миф, реальность, фантазия, мечта, план, стратегия, тактика, игра, спорт, здоровье, еда, напиток, кухня, рецепт, традиция, праздник, обычаи, культура, искусство, творчество.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
