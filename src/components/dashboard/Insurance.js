import React from 'react'

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import AOS from 'aos'
import 'aos/dist/aos.css'

import '../../assets/styles/profile.css'
import '../../assets/styles/dashboard.css'
import {Link} from "react-router-dom";

class Insurance extends React.Component {

    componentDidMount() {
        const {user} = this.props.auth
        console.log(user)
        AOS.init({
          // initialise with other settings
          duration : 1000
        });
    }
    render() {
        const { user } = this.props.auth;
        console.log(user)
        return (
          <div className="serviceWrapper2">
          <div className="serviceCenter2">
            <h4            
            data-aos-anchor-easing='ease-in-out'
            data-aos='fade-up'
            data-aos-offset='200' 
            className="serviceTitle twotime">
                Compare insurance qoutes for free
            </h4>
            <h6 
                        data-aos-anchor-easing='ease-in-out'
                        data-aos='fade-up'
                        data-aos-offset='200'
            className="serviceText twotime">Shop and compare qoutes to get the best coverage 
            for the best rate.</h6>

           <Link>
           <div
            data-aos-anchor-easing='ease-in-out'
            data-aos='fade-up'
            data-aos-offset='200'
            className="serviceItem">
                <h5 className="serviceItemColor1"> Auto Insurance </h5>
                <h6 className="serviceText">Find insurance to protect your vehicle.</h6>
                <div className="serviceItemBtn1">
                Compare rates
              </div>
            </div>
           </Link>
         <Link>
         <div 
                        data-aos-anchor-easing='ease-in-out'
                        data-aos='fade-up'
                        data-aos-offset='200'
                        data-aos-delay='50'
            className="serviceItem">
              <h5 className="serviceItemColor2"> Home Insurance </h5>
              <h6 className="serviceText">Get insurance to provide coverage for unseen events.</h6>
              <div className="serviceItemBtn3">
               Get a free qoute
              </div>
            </div> 
         </Link>     
            <Link>
            
            <div 
                                    data-aos-anchor-easing='ease-in-out'
                                    data-aos='fade-up'
                                    data-aos-offset='200'
                                    data-aos-delay='100'
            className="serviceItem">
              <h5 className="serviceItemColor3">Life Insurance </h5>
              <h6 className="serviceText">Protect your family with affordable life insurance from top online providers. We help you get the right policy at the right price.</h6>
              <div className="serviceItemBtn2">
                Stay protected
              </div>
            </div>
            </Link>
          </div>
        </div>
        )
    }
}

Insurance.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Insurance);