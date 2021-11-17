import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import './App.scss';

function App() {

  return (
    <div className='mainContainer'>
      <Header />
      <SearchBar />
      <UserProfile />
    </div>
  );
}

export default App;
