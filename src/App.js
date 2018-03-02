import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import { countries } from './countries';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      countries: countries,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {

    const filteredCountries = this.state.countries.filter(country => {
      return country.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div className='tc'>
        <h1 className='f-headline lh-solid'>Country Report</h1>
        <Searchbox searchChange={this.onSearchChange}/>
        <CardList countries={filteredCountries} />
      </div>
    );
  }

}

export default App;
