import { Component } from 'react';
import './App.css';

import CardList from './app/components/CardList';
import SearchBox from './app/components/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(
      () => ({ monsters: users }),
      () => console.log(this.state.monsters)
    ))
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase()
    this.setState(() => { 
      return { searchField }
    })
  }
    
  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
    return (
      <div className="App">
        <SearchBox 
          className='monsters-search-box'
          placeholder='search monsters' 
          onChangeHandler={onSearchChange} 
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
