// ! COMPONENTS
import Buttons from './Buttons';
import Slide from './Slide';
// ! FILES
import React, { useState, useEffect } from 'react';
import { slides } from '../data';
import '../styles/Slider.css';

const Slider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index > slides.length - 1) {
      setIndex(0);
    }

    if (index < 0) {
      setIndex(slides.length - 1);
    }
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className='section-slider'>
      <article className='slider-container'>
        {slides.map((slide, i) => {
          let position = 'next-slide';

          if (i === index) {
            position = 'active-slide';
          }

          if (i === index - 1 || (index === 0 && i === slides.length - 1)) {
            position = 'prev-slide';
          }

          return <Slide key={slide.id} slide={slide} position={position} />;
        })}
        <Buttons setIndex={setIndex} />
      </article>
    </section>
  );
};

export default Slider;
