import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ExampleLearn from './views/ExampleLearn';
import ExampleChallenge from './views/ExampleChallenge';
import Home from './views/Home';
import './App.css';

function App() {
  return (

    <div className="App">

      <hr />
      <Router forceRefresh>
        <NavBar />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ExampleLearn" element={<ExampleLearn />} />
          <Route path="/ExampleChallenge" element={<ExampleChallenge />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
