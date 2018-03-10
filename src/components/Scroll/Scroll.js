import React from 'react';

const Scroll = (props) => {
  return (
    <div style={ {margin: '15px', overflowY: 'scroll', border: '3px solid black', height: '1000px'} }>
      {props.children}
    </div>
  );
};

export default Scroll;
