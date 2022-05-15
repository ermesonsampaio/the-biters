import React, { useRef } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import Logo from './assets/logo-white.svg';
import WelcomeIllustration from './assets/images/data.svg';
import MobileDevelopment from './assets/images/mobile.svg';
import WebDevelopment from './assets/images/website.svg';
import Bikcraft from './assets/images/bikcraft.jpg';
import Dogs from './assets/images/dogs.jpg';
import Wildbeast from './assets/images/wildbeast.jpg';
import { Widget } from './components/Widget';

function App() {
  const solutionsRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);

  const headerOptions = [
    {
      title: 'Soluções',
      ref: solutionsRef,
    },
    {
      title: 'Portfólio',
      ref: portfolioRef,
    },
  ];

  const solutions = [
    {
      title: 'Desenvolvimento Mobile',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt autem amet, aliquam pariatur enim culpa, earum tempora odit laboriosam repellat suscipit molestiae illum vero! Maxime error tempora rem corrupti voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos labore eligendi nobis animi laudantium cum nulla provident dolor similique hic illum reprehenderit libero, blanditiis eaque praesentium consequuntur vero sint ipsa.',
      image: {
        source: MobileDevelopment,
        alt: 'Desenvolvimento mobile.',
      },
    },
    {
      title: 'Desenvolvimento Web',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt autem amet, aliquam pariatur enim culpa, earum tempora odit laboriosam repellat suscipit molestiae illum vero! Maxime error tempora rem corrupti voluptatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos labore eligendi nobis animi laudantium cum nulla provident dolor similique hic illum reprehenderit libero, blanditiis eaque praesentium consequuntur vero sint ipsa.',
      image: {
        source: WebDevelopment,
        alt: 'Desenvolvimento web.',
      },
    },
  ];

  return (
    <>
      <div className="h-screen flex flex-col px-10">
        <nav className="px-12 py-5 border-b border-slate-300/20 flex justify-between items-center fixed bg-gray-400/10 backdrop-blur-sm self-center w-full top-0 z-10">
          <button
            type="button"
            onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={Logo} className="w-10 h-10" />
          </button>

          <ul className="flex gap-x-8">
            {headerOptions.map(({ title, ref }) => (
              <li key={title}>
                <button
                  type="button"
                  className="text-base transition-colors font-medium hover:text-gray-400"
                  onClick={() =>
                    ref?.current?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-1 items-center justify-center">
          <div className="flex items-center flex-col gap-y-12 md:gap-x-16 justify-center mt-10 md:flex-row">
            <img src={WelcomeIllustration} className="w-3/5 md:w-3/12 h-auto" />

            <div className="flex flex-col max-w-xl">
              <h1 className="text-center md:text-left text-5xl font-light tracking-tight">
                Bem vindos a{' '}
                <strong className="text-white font-bold">The Biters</strong>.
              </h1>
              <p className="text-center mt-4 md:text-justify leading-relaxed text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
                esse consequatur! Quidem amet voluptate nesciunt? Ducimus ab qui
                deserunt laborum tenetur sapiente, reiciendis at assumenda minus
                ad tempore doloribus dicta!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={solutionsRef}
        className="flex flex-col items-center p-10 bg-zinc-800"
      >
        <h1 className="mt-16 text-3xl font-bold pb-8">Nossas Soluções</h1>

        {solutions.map(({ title, description, image }) => (
          <div
            key={title}
            className="flex flex-col mt-24 gap-x-4 items-center justify-between w-3/4 md:flex-row"
          >
            <img src={image.source} className="w-4/12" />

            <div className="flex flex-col max-w-lg">
              <h1 className="text-2xl font-semibold">{title}</h1>
              <p className="mt-4 text-justify leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>

      <div
        ref={portfolioRef}
        className="flex flex-col items-center py-10 bg-zinc-800"
      >
        <h1 className="text-3xl font-bold my-16">Portfólio</h1>

        <Splide
          options={{
            type: 'loop',
            width: '80%',
            arrows: true,
            gap: '2rem',
            padding: '5rem',
          }}
          aria-label="My Favorite Images"
          style={{ zIndex: 0 }}
        >
          <SplideSlide>
            <img src={Bikcraft} alt="Bikcraft" />
          </SplideSlide>
          <SplideSlide>
            <img src={Dogs} alt="Dogs" />
          </SplideSlide>
          <SplideSlide>
            <img src={Wildbeast} alt="Wildbeast" />
          </SplideSlide>
        </Splide>
      </div>

      <footer className="flex m-auto justify-between w-11/12 items-center p-8">
        <button
          type="button"
          onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img src={Logo} className="w-10 h-10" />
        </button>
        <span className="text-slate-100 text-lg leading-relaxed font-medium">
          The Biters - 2022
        </span>
      </footer>

      <Widget />
    </>
  );
}

export default App;
