import React from 'react';

const SearchBox = ( {searchChange} ) => {
  return (
    <div className='pa3'>
      <input
        className='pa3 ba b--black bw2 bg-near-white'
        type="search"
        placeholder='Search Country'
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;
