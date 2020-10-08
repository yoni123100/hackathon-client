import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

const Home = (props) => {
  return <div>hello world</div>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </div>
  );
}

export default App;
