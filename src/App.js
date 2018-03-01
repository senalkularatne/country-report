import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { countries } from './countries';

class App extends Component {

  constructor() {
    super();
    this.state = {
      countries: countries,
      searchfield: ''
    }
  }

  // Without the arrow function if we simply do = value of this here is referring to the component the even handler is attached to which in <input>
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }


  render() {
    const filteredCountries = this.state.countries.filter(country => {
      return country.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1>Country Report</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList countries={filteredCountries} />
      </div>
    );
  }

}

export default App;
