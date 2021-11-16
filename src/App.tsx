import React from 'react';
import Header from './components/header';
import SearchBar from './components/SearchBar';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <UserProfile />
    </div>
  );
}

export default App;
