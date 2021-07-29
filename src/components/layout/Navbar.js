import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import { logoutUser } from "../../actions/authActions";

import '../../assets/styles/navbar.css'

class Navbar extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
};

    render() {
      let navbar
      console.log(this.props.auth.isAuthenticated)

      if(this.props.auth.isAuthenticated){
        console.log("show logged in navbar")
        navbar =  <div className="navContainer">
        <nav id="authNav" class="navbar navbar-expand-md navbar-light bg-light">
        <div className="navWidth"></div>
      <a class="navbar-brand" href="/"><img alt="navbarLogo "className='lendingTree' src="https://www.adweek.com/wp-content/uploads/2018/07/lendingtree-leaf-450-2018-450x450.png"></img></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
            <a class="nav-link " href="/dashboard">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link " href="/user/loans">Your Loans</a>
          </li>
         
          <li class="nav-item ">
            <a class="nav-link " href="/user/insurance">Insurance</a>
          </li>

          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Resources
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="https://www.lendingtree.com/academy/">LendingTree Academy</a>
              <a class="dropdown-item" href="/user/loans/search">Loan Search Engine</a>
              <a class="dropdown-item" href="/user/tasks">Your Tasks</a>
            </div>
          </li>

        </ul>
        <Link
        onClick={this.onLogoutClick} 
        to='/register'>
          Log Out
        </Link>
        <Link to='/user/profile'>
        <button
        class="btn navBtn  waves-effect waves-light my-2 my-sm-0" type="submit"> Profile </button>
        </Link>
        <div className="navWidth"></div> 

      </div>
    </nav>
     </div>
      } else {
       navbar =  <div className="navContainer">
        <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div className="navWidth"></div>
      <a class="navbar-brand" href="/"><img alt="lendingLogo" className='lendingTree' src="https://www.adweek.com/wp-content/uploads/2018/07/lendingtree-leaf-450-2018-450x450.png"></img></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
            <a class="nav-link" href="/">Home </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Link</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/">Home </a>
          </li>

          
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/">Action</a>
              <a class="dropdown-item" href="/">Another action</a>
              <a class="dropdown-item" href="/">Something else here</a>
            </div>
          </li>

        </ul>
        <Link to='/register'>
          Sign up for free
        </Link>
        <Link to='/login'>
        <button class="btn navBtn  waves-effect waves-light my-2 my-sm-0" type="submit"> Log In </button>
        </Link>
        <div className="navWidth"></div> 

      </div>
    </nav>
     </div>
      }
        return (
          <div>
            {navbar}
          </div>
        );
    }
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);