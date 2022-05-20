// ! FILES
import React from 'react';
import '../styles/Slide.css';

const Slide = ({ slide, position }) => {
  const { src, name } = slide;

  return (
    <div className={`slide ${position}`}>
      <img src={src} alt={name} className='img' />
    </div>
  );
};

export default Slide;
