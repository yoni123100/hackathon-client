import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlackList from './components/blackList/blacklist.container';
// import './App.css';

const Home = (props) => {
  return <div>hello world</div>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/b" component={BlackList} />
      </Router>
    </div>
  );
}

export default App;
