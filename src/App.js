import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';
import Wrapper from './Components/Wrapper/Wrapper';
import './App.css';
import SectionSearch from './Components/SectionSearch';

function App() {
  return (
    <div>
      {/* You can add Navbar, Section, and Wrapper here if needed */}
      <Section content={"The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness."}/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/search">
              <SectionSearch />
            </Route>
            {/* Add other routes here as needed */}
          </Switch>
    </div>
  );
}

export default App;
