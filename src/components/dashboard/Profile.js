import React from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import '../../assets/styles/profile.css'
class Profile extends React.Component {

    componentDidMount() {
        const {user} = this.props.auth
        console.log(user)
    }
    render() {
        const { user } = this.props.auth;
        console.log(user)
        return (
          <div className="profileWrapper">
              <div className="userSection">
                <h4>View your asdasdasdasd, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}</h4>
                <div className="userPfpCol">
                    <div className="userButton"></div>
                    <img 
                    alt="profileLogo"
                    src="https://www.guidedogs.org/wp-content/uploads/2019/11/website-donate-mobile.jpg" className="userImage">
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