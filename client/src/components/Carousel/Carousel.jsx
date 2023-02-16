import React, { useState, useEffect, useRef } from "react";
import { CarouselContainer } from "./Carousel.styled.js";

const Carousel = (props) => {
  const { banners } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(banners.length);

  const carouselRef = useRef(null);

  useEffect(() => {
    setLength(banners.length);
  }, [banners]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const next = () => {
    const lastIndex = length - 1;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  const prev = () => {
    const lastIndex = length - 1;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentIndex - 1;
    setCurrentIndex(index);
  };

  return (
    <CarouselContainer>
      <div className="carousel-container">
        <div className="carousel-wrapper">
          <button onClick={prev} className="left-arrow">
            PREV
          </button>
          <div className="carousel-content-wrapper">
            <div
              className="carousel-content"
              ref={carouselRef}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {banners.length > 0 &&
                banners.map((el) => (
                  <img
                    className="carousel-image"
                    key={el.id}
                    src={el.bannerImageUrl}
                    alt={el.bannerImageAlt}
                  />
                ))}
            </div>
          </div>
          <button onClick={next} className="right-arrow">
            NEXT
          </button>
          <div className="dots">
            {banners.map((el, i) => (
              <button
                aria-label={`${el.bannerImageAlt} Slide`}
                key={el.bannerImageAlt}
                className={`dot ${i === currentIndex ? "active" : ""}`}
                onClick={() => handleDotClick(i)}
              >
                <span hidden>${el.bannerImageAlt} Slide</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </CarouselContainer>
  );
};

export default Carousel;
