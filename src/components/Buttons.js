// ! FILES
import React from 'react';
import '../styles/Buttons.css';
import { slides } from '../data';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Buttons = ({ setIndex }) => {
  const checkIndex = (i) => {
    if (i > slides.length - 1) {
      return 0;
    }

    if (i < 0) {
      return slides.length - 1;
    }
    return i;
  };

  const prevSlide = () => {
    setIndex((i) => {
      const newIndex = i - 1;
      return checkIndex(newIndex);
    });
  };

  const nextSlide = () => {
    setIndex((i) => {
      const newIndex = i + 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <>
      <button className='btn prev-btn' onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className='btn next-btn' onClick={nextSlide}>
        <FaChevronRight />
      </button>
    </>
  );
};

export default Buttons;
