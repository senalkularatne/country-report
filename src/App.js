import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      countries: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(users => this.setState({countries: users}));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {

    const filteredCountries = this.state.countries.filter(country => {
      return country.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    if (this.state.countries.length === 0) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f-headline lh-solid'>Country Report</h1>
          <Searchbox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList countries={filteredCountries} />
          </Scroll>
        </div>
      );
    }

  }

}

export default App;
