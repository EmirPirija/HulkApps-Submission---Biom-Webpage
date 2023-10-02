import React, { useState, useEffect } from 'react';
import classes from './Testimonials.module.css';

const testimonials = [
  {
    text: "Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.",
    author: "- John D.",
  },
  {
    text: "In today's hygiene-conscious world, these wipes have become an essential part of my routine. Not only do they effectively clean and sanitize, but they also leave my skin feeling hydrated, which is a rare find. And the eco-friendly aspect? It's a win-win for me and the environment.",
    author: "- Jane S.",
  },
  {
    text: "I can't emphasize enough how crucial cleanliness is nowadays, and these wipes have made it effortless. I appreciate that they're gentle on my skin, preventing dryness. What's even more satisfying is knowing that I'm making an eco-conscious choice by using their products. It's a small step, but every bit counts.",
    author: "- Sam J.",
  },
];

const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentTestimonialIndex(index);
  };

  return (
    <div>
      <p className={classes["response-title"]}>what people are saying</p>
      <div className={classes.carousel}>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`${classes.slide} ${currentTestimonialIndex === index ? classes.active : ''}`}
          >
            <p className={classes.response1}>{testimonial.text}</p>
            <p className={classes.author}>{testimonial.author}</p>
          </div>
        ))}
      </div>
      <div className={classes.dots}>
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`${classes.dot} ${currentTestimonialIndex === index ? classes.active : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <div className={classes.dynrec}></div>
    </div>
  );
};

export default Testimonials;
