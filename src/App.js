import React, {Component} from 'react'
import PostForm from './PostForm'
import AllPost from './AllPost'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'
import { AuthProvider } from './components/Auth'
import LogOut from './components/Logout'

class App extends Component {
  render(){
    return(
      <AuthProvider>
      <Router>
        <div className="App">
          
            <Switch>
            <Route path="/post"> 
                <AllPost />
            </Route>

            <Route path="/login"> 
                <LogIn />
            </Route>

            <Route path="/signup"> 
                <SignUp />
            </Route>

            <Route path="/dashboard"> 
                <PostForm />
                <br/><br/>
                <button className="Check-Post"><Link to="/post"><p className="check-font">Check Posts Results</p></Link></button>
                <br/><br/>
                <LogOut/>
            </Route>

            <Route path="/"> 
                <Home />
            </Route>
            </Switch>
          
        </div>
      </Router>
      </AuthProvider>
    );
  }
}

export default App;
