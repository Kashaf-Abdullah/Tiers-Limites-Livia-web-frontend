


import React, { useRef, useEffect, useState } from 'react';
import user from '../assets/Bilder website/IMG_3054.JPG';
import user2 from '../assets/Bilder website/livia_pic.JPG';

const Intro = () => {
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(window.innerWidth < 355 ? user2 : user);
  const [imgStyle, setImgStyle] = useState({
    width: '100%', // Make the image width 100% of its container
    height: 'auto', // Maintain the aspect ratio
    display: 'block', // Ensure the image behaves as a block element
    // Add border radius if needed
  });

  useEffect(() => {
    const handleResize = () => {
      const imgWidth = imgRef.current.clientWidth;
      if (window.innerWidth < 400) {
        setImgSrc(user2);
      } else {
        setImgSrc(user);
      }

      if (imgWidth < 744) {
        setImgStyle((prevStyle) => ({
          ...prevStyle,
          // height: '27rem',
        }));
      } else {
        setImgStyle((prevStyle) => ({
          ...prevStyle,
          height: 'auto',
        }));
      }
    };

    handleResize(); // Call once on mount to set initial size
    window.addEventListener('resize', handleResize); // Add event listener for window resize

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty array ensures this effect runs only on mount and unmount

  return (
    <div id="home">
      <img ref={imgRef} src={imgSrc} alt="" style={imgStyle} />
    </div>
  );
};

export default Intro;