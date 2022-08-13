import { useState, useEffect } from 'react'

import './App.css';

import CardList from './app/components/CardList';
import SearchBox from './app/components/SearchBox';

import { useFetchData } from './app/utils/hooks';

const App = () => {
  const { data: monsters } = useFetchData('https://jsonplaceholder.typicode.com/users')

  const [searchField, setSearchField] = useState('')
  const [title, setTitle] = useState('')
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField))
    setFilteredMonsters(newFilteredMonsters)

  }, [monsters, searchField])

  const onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase()
    setSearchField(() => searchString)
  }

  const onTitleChange = (e) => {
    const searchString = e.target.value.toLowerCase()
    setTitle(() => searchString)
  }


  return (
      <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox 
        className='monsters-search-box'
        placeholder='search monsters' 
        onChangeHandler={onSearchChange} 
      />
      <br />
      <SearchBox 
        className='title-search-box'
        placeholder='set title' 
        onChangeHandler={onTitleChange} 
      />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
