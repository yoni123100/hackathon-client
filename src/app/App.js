import React from 'react';
import Posts from './components/posts/Posts'
import { BrowserRouter as Router, Route } from "react-router-dom";

const Home = (props) => {
  return <div>hello world</div>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Home} />
        <Route path="/posts" component={Posts} />
      </Router>
    </div>
  );
}

export default App;
