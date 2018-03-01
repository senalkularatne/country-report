import React from 'react';
import Card from './Card';

// countries object is received as a prop
const CardList = ({ countries }) => {
  // inside <div>...</div>, loop over the country objects and map
  // each object as <Card /> attributes
  return (
    <div>
      {
        countries.map((country, i) => {
          return (
            <Card
              key={country.name}
              name={country['name']}
              flag={country['flag']}
              capital={country['capital']}
              region={country['region']}
              currency={country['currencies'][0]['name']}
              population={country['population'].toLocaleString()}
            />
          )
        })
      }
    </div>
  );
}

export default CardList;
