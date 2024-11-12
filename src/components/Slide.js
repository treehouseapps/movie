import React, { useState, useEffect } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/529615.jpg',
      title: 'Avengers',
      description: 'On a mission ollect all six Infinity Stones, mission ollect all six Infinity Stones, Thanos plans to use the artifacts to inflict himission ollect all six Infinity Stones, Thanos plans to use the artifacts to inflict himission ollect all six Infinity Stones, Thanos plans to use the artifacts to inflict hi Thanos plans to use the artifacts to inflict his twisollect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisollect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twis ollect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twis to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. '
    },
    {
      image: '/1.jpg',
      title: 'Avengers: Age of Ultron',
      description: 'On a mission to ollect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twis ollect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twis ollect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twis collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. ollect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisollect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twis'
    },
    {
      image: '/assets/cover/cover.jpg',
      title: 'Avengers: Infinity War',
      description: 'On a mission to collect all six Infinity Stones, ll six Infinity Stones, mission ollect all six Infinity Stones, Thanos  ll six Infinity Stones, mission ollect all six Infinity Stones, Thanos  ll six Infinity Stones, mission ollect all six Infinity Stones, Thanos  Thanos plans to use the artifacts to inflict his twisted will on reality.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={slide.title} className="background-image" />
            <div className="overlay"></div>
            <div className="content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
              <button className="watch-now-btn">Watch Now</button>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slider;