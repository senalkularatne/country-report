import React from 'react';
import './Card.css';

const Card = (props) => {
  const { name, flag, capital, region, currency, population } = props;

  return (
    <div id='cardCont' className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-3'>
      <h2>{name}</h2>
      <img src={flag} alt='flag'/>
      <div>
        <p>Capital: {capital}</p>
        <p>Region: {region}</p>
        <p>Currency: {currency}</p>
        <p>Population: {population}</p>
      </div>
    </div>
  )
}

export default Card;
