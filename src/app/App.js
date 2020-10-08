import React from 'react';
import Posts from './components/posts/post.container'
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlackList from './components/blackList/blacklist.container';

const Home = (props) => {
  return <div>landing page</div>
}

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/posts" component={Posts} />
        <Route path="/b" component={BlackList} />
      </Router>
    </div>
  );
}

export default App;
