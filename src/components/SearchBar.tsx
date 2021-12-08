import React, { useState } from "react";
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg'
import './SearchBar.scss'

const SearchBar = (props: any) => {
    const [user, setUser] = useState('')

    const handleChange = (e: any) => {
        setUser(e.target.value)
    }

    const handleClick = (e: any) => {
        e.preventDefault()
        props.setCurrentUser(user)
        setUser('')
    }
    return (
        <div className='searchContainer'>
            <form>
                <div className='search'>
                    <SearchIcon />
                    <input 
                        className='inputText' 
                        placeholder='Search GitHub username...'
                        onChange={handleChange}
                        value={user}
                        type='text'>
                    </input>
                </div>
                {/* <p className='errorMessage'>No results</p> */}
                <button onClick={handleClick} className='searchButton'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar
