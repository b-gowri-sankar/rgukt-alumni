import './App.css';
// import PostsEvents from './PostsEvents/PostsEvents';
// import Banner from './Banner/Banner'
// import NeedsCenter from './NeedsCenter/NeedsCenter'
import Centers from './NeedsCenter/Centers/Centers'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './layout/Navbar';
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path="/dashboard" exact component={Centers}></Route>
        </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;
