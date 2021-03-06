import './App.css';
// import PostsEvents from './PostsEvents/PostsEvents';
// import Banner from './Banner/Banner'
// import NeedsCenter from './NeedsCenter/NeedsCenter'
// import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux';
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
import ProfileForm from './Profiles/Profile/Profileform';
import Profiles from './Profiles/Profiles'
import ProfileDetails from './Profiles/Profile/ProfileDetails'
import Footer from './UI/footer/footer'
import QuickLinks from './Components/QuickLinks/quickLinks'
// import Needs from './NeedsCenter/Needs/Needs'
// import ImagesNotify from './Notifications/Images/images'
import Sidebar from './Components/SideBar/SideBar'
// import spinner from './UI/spinner/spinner'
import Header from './Components/Header/Header'

const App = ( props) => {

  const auth = props.auth;

  if (!auth.uid)
    return (
      <BrowserRouter>
        <Header />
        <Route path='/signin' exact component={SignIn} />
        <Route path='/'exact component={NavBar} />
        <Route path='/' exact component={Sidebar} />
        <Route path='/' exact component={HomePage} />
        <Route path='/' exact component={QuickLinks} />
        <Route path='/' exact component={Footer} />
        <Route path='/signup' exact component={SignUp} />
      </BrowserRouter>
    )
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Header /> */}
        <Header />
        <NavBar />
        <Sidebar />
        
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
          <Route path='/profileform' exact component={ProfileForm}></Route>
          <Route path='/profiles' exact component={Profiles}></Route>
          <Route path='/profile/:id' exact component={ProfileDetails} />
          {/* <Route path='/imagesnotify' exact component={ImagesNotify} /> */}
          {/* <Route path='/spinner' exact component={ spinner } /> */}
          {/* <Route path="/needs" exact component={Needs} /> */}
          <Route path='/' component={HomePage} />
        </Switch>
        <QuickLinks />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  // console.log('state',state.firebase.auth)
  return {
    auth:state.firebase.auth
  }
}


export default connect(mapStateToProps)(App);
