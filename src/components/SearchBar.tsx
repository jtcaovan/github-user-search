import React from "react";
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg'
import './SearchBar.scss'

const SearchBar = () => 
    <div className='searchContainer'>
        <SearchIcon />
        <input className='inputText' placeholder='Search GitHub username...' type='text'></input>
        {/* <p className='errorMessage'>No results</p> */}
        <button className='searchButton'>Search</button>
    </div>

export default SearchBar
