import './App.css';
import PostsEvents from './PostsEvents/PostsEvents';
import Banner from './Banner/Banner'
import NeedsCenter from './NeedsCenter/NeedsCenter'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    < BrowserRouter>
    <div className="App">
      <p> toolbar </p>
      <Banner />
      <PostsEvents />
      <NeedsCenter />
      <p>Third Cards Row </p>
      </div>
      </BrowserRouter>
  );
}

export default App;
