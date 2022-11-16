import logo from './logo.svg';
import SearchField from './components/searchfield/searchField';
import CardList from './components/cardList/cardList';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from './components/spinner/spinner';
import './App.css';

function App() {

  const [robots, setRobots] = useState([]);
  const [newFilteredRobots, setNewFilteredRobots] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
      setRobots(resp.data);
    })
    

  }, [])

  useEffect(() => {
    setNewFilteredRobots(robots);
  }, [robots]) 

  const filteredRobot = (event) => {
    const robotsFiltered = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setNewFilteredRobots(robotsFiltered);

  }


  return (
    
  newFilteredRobots.length <= 0 ? <Spinner/> : 
  <div className="App">
    <h1>Robot Search</h1>
    <SearchField filteredRobot={filteredRobot}/>
    <CardList robots={newFilteredRobots}/>
  </div>  
   
  );
}

export default App;
