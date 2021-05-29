import './App.css';
// import PostsEvents from './PostsEvents/PostsEvents';
// import Banner from './Banner/Banner'
// import NeedsCenter from './NeedsCenter/NeedsCenter'
import Centers from './NeedsCenter/Centers/Centers'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './layout/Navbar';
import CreatePost from './PostsEvents/Posts/Post/CreatePost';
import HomePage from './HomePage';
import CenterDetails from './NeedsCenter/Centers/Center/CenterDetails';
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import CreateCenter from './NeedsCenter/Centers/Center/CreateCenter';
import posts from './PostsEvents/Posts/Posts';
import PostDetails from './PostsEvents/Posts/Post/PostDetails';
import Events from './PostsEvents/Events/Events'
import CreateEvent from './PostsEvents/Events/Event/CreateEvent'
import EventDetails from './PostsEvents/Events/Event/EventDetails'
import Images from './Images/images'
import Queries from './Queries/Queries'
import QueryForm from './Queries/Query/QueryForm'
import QueryDetails from './Queries/Query/QueryDetail'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/internships" exact component={Centers}></Route>
          <Route path='/internship/:id' exact component={CenterDetails}></Route>
          <Route path='/signin' exact component={SignIn} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/createintern' component={CreateCenter} />
          <Route path='/posts' exact component={posts} />
          <Route path='/post/:id' exact component={PostDetails} />
          <Route path='/createpost' exact component={CreatePost} />
          <Route path='/events' exact component={Events} />
          <Route path='/createevent' exact component={CreateEvent} />
          <Route path='/event/:id' exact component={EventDetails} />
          <Route path='/images' exact component={Images} />
          <Route path='/queries' exact component={Queries}></Route>
          <Route path='/queryform' exact component={QueryForm}></Route>
          <Route path='/query/:id' exact component={QueryDetails}></Route>
          <Route path='/' component={HomePage} />

        </Switch>  
      </div>
    </BrowserRouter>
  );
}

export default App;
