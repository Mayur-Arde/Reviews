import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {id, name , job ,image, text} = people[index];

  const checkNumber = (number)=>{
    if (number > people.length -1){
      return 0;
    }else if (number < 0){
      return people.length -1 ;
    }else {
      return number;
    }
  }

  const prevPerson = () =>{
    setIndex((index) =>{
      let newPerson = index - 1;
      return checkNumber(newPerson);
    })
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newPerson = index + 1;
      return checkNumber(newPerson);
    });
  };

  const randomPerson = () =>{
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index){
      randomNumber = randomNumber + 1
      console.log(randomNumber);
    }
    setIndex(checkNumber(randomNumber));
  }
  
  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-conatiner">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>Random</button>
    </article>
  );
};

export default Review;
