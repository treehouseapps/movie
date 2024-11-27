import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";

const Slider = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {data.map((slide, index) => (
          <div key={index} className="slide">
            <img
              src={`https://image.tmdb.org/t/p/w1280/${slide.backdrop_path}`}
              alt={slide.title}
              className="background-image"
            />
            <div className="overlay"></div>
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.overview}</p>
              <Button
                variant="contained"
                color="error"
                className="mt-2"
                onClick={() => alert("Watching")}
              >
                Watch Now
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {data.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? "active" : ""}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;
