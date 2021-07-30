import React from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../assets/styles/profile.css'
class Profile extends React.Component {

    componentDidMount() {
        const {user} = this.props.auth
        console.log(user)
        window.scrollTo(0, 0)

    }
    render() {
        const { user } = this.props.auth;
        console.log(user)
        let expImg
        if(user.levelExp <= 3) {
          expImg = <p> level 1 </p>
        } else if (user.levelExp <= 5) {
          expImg = <p> level 2 </p>
        } else if (user.levelExp <= 10) {
          expImg = <p> level 3 </p>
        }

        let pfp
        let dbURL = user.imageURL
        if(user.imageURL === ""){
          pfp = "https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg"
        } else {
          pfp = dbURL
        }
          return (
          <div className="profileWrapper">
              <div className="userSection">
                <h4>View your profile, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h4>
                <h4>Account Level: {user.levelExp}</h4>
                {expImg}
                <div className="userPfpCol">
                    <div className="userButton"></div>
                    <img 
                    alt="profileLogo"
                    src={pfp} className="userImage">
                    </img>
                </div>
              </div>
          </div>
        )
    }
}

Profile.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Profile);