import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";
import '../../assets/styles/form.css'
import '../../assets/styles/dashboard.css'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import AOS from 'aos'
import 'aos/dist/aos.css'

import {Link} from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      clicked: true
    });

    console.log(this.state.clicked)
  }
  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
};



componentDidMount() {

  AOS.init({
    // initialise with other settings
    duration : 1000
  });
  const { user } = this.props.auth;

  am4core.useTheme(am4themes_animated);

  // create chart

  var chart = am4core.create("chartdiv", am4charts.GaugeChart);

  chart.innerRadius = -30;

  var axis = chart.xAxes.push(new am4charts.CategoryAxis());
  axis.dataFields.category = "category";
  axis.data = [{
    category: "300"
  }, {
    category: "400"
  }, {
    category: "500"
  }, {
    category: "600"
  }, {
    category: "700"
  }, {
    category: "800"
  }];
  axis.renderer.labels.template.location = 0.5;
  axis.renderer.grid.template.location = 0.5;
  axis.startLocation = 0.5;
  axis.endLocation = 0.5;

  var colorSet = new am4core.ColorSet();

  var range0 = axis.axisRanges.create();
  range0.category = "300";
  range0.endCategory = "500";
  range0.axisFill.fillOpacity = 1;
  range0.axisFill.fill = colorSet.getIndex(0);
  range0.axisFill.zIndex = -1;
  range0.locations.category = 0.5;
  range0.locations.endCategory = 0.5;
  range0.label.text = "";
  range0.grid.disabled = true;

  var range1 = axis.axisRanges.create();
  range1.category = "500";
  range1.endCategory = "700";
  range1.axisFill.fillOpacity = 1;
  range1.axisFill.fill = colorSet.getIndex(1);
  range1.axisFill.zIndex = -1;
  range1.locations.category = 0.5;
  range1.locations.endCategory = 0.5;
  range1.label.text = "";
  range1.grid.disabled = true;

  var range2 = axis.axisRanges.create();
  range2.category = "700";
  range2.endCategory = "800";
  range2.axisFill.fillOpacity = 1;
  range2.axisFill.fill = colorSet.getIndex(2);
  range2.axisFill.zIndex = -1;
  range2.locations.category = 0.5;
  range2.locations.endCategory = 0.5;
  range2.label.text = "";
  range2.grid.disabled = true;

  var hand = chart.hands.push(new am4charts.ClockHand());
  hand.value = user.creditScore;

}

componentWillUnmount() {
  if(this.chart){
    this.chart.dispose()
  }
}
render() {
    const { user } = this.props.auth;
    console.log(user)

    let creditText;
    let thankYou;

    if(user.creditScore < 400){
      creditText = <div>
      <h4 
      className="dashboardText">Your credit score is <span className="lowCredit">Poor</span></h4>
      <a href="https://www.lendingtree.com/credit-repair/how-to-improve-your-credit-score/"><h4 className="creditSubHead">Learn how to fix your credit score</h4></a>
      <a href="https://www.lendingtree.com/academy/">learn more about LendingTree academy</a>
    </div>
    } else if (user.creditScore < 500){
      creditText = <div>
      <h4 className="questionTitle">Your credit score is <span className="lowCredit">Poor</span></h4>
      <a href="https://www.lendingtree.com/credit-repair/how-to-improve-your-credit-score/"><h4>Learn how to fix your credit score</h4></a>
      <a href="https://www.lendingtree.com/academy/"><h4>Learn more about LendingTree academy</h4></a>
    </div>
    }
    else if (user.creditScore < 600){
      creditText = <h4>Your credit score is <span className="medCredit">Fair</span></h4>
    }
    else if (user.creditScore < 700){
      creditText = <h4>Your credit score is <span className="highCredit">Good</span></h4>
    }
    else if (user.creditScore <= 800){
      creditText = <h4>Your credit score is <span className="highCredit">Very Good</span></h4>
    }

    if(this.state.clicked === true){
      thankYou = <h4
      data-aos-anchor-easing='ease-in-out'
      data-aos='fade-left'
      data-aos-delay='100'
      className="flow-text dashboardText grey-text text-darken-1 dashboardWrapper">Thank you for answering our survey!</h4>
    }
return (
      <div 
      className="dashboardWrapper
      "
      data-aos-anchor-easing='ease-in-out'
      data-aos='fade'
      data-aos-delay='200'>
        <div className="welcomeSection">
        <h4>
              <h4
              className="flow-text dashboardText"> Your Bank: {user.bankAccount}</h4>
              <h4 
              className="flow-text dashboardText grey-text text-darken-1">Your credit score:
               <span
                className="creditScore"> {user.creditScore}</span></h4>
              <div 

              id="chartdiv"></div>
              {creditText}
              <h4 
              className="flow-text dashboardText grey-text text-darken-1">
                Welcome to your personal dashboard, {user.name.charAt(0).toUpperCase() + user.name.slice(1)}
                <br></br>
                View your financial status
              </h4>
              
            </h4>
            <button
              style={{
                width: "16rem",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              id="greenButton"
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Logout
            </button>

        </div>
        <div className="questionCenter">
        <div className="questionWrapper">
        <h4 
                    data-aos-anchor-easing='ease-in-out'
                    data-aos='fade'
                    data-aos-offset='100' 
        className="questionTitle">
          Why are you here today? <br></br> Please choose one
        </h4>
        <FormControl component="fieldset" >
                            <FormGroup>
                           
                            <FormControlLabel
                            data-aos-anchor-easing='ease-in-out'
                            data-aos='fade-left'
                            data-aos-offset='100'
                            data-aos-delay='300'
                                control={<Checkbox className='checkbox'  onChange={e => this.handleClick(e)}id='homeAcc' name="homeAcc" />}
                                label="Browse Loans"
                            />

<FormControlLabel
                            data-aos-anchor-easing='ease-in-out'
                            data-aos='fade-left'
                            data-aos-offset='100'
                            data-aos-delay='400'
                                control={<Checkbox className='checkbox'  onChange={e => this.handleClick(e)}id='homeAcc' name="homeAcc" />}
                                label="Loan Officer"
                            />

<FormControlLabel
                            data-aos-anchor-easing='ease-in-out'
                            data-aos='fade-left'
                            data-aos-offset='100'
                            data-aos-delay='500'
                                control={<Checkbox className='checkbox'  onChange={e => this.handleClick(e)}id='homeAcc' name="homeAcc" />}
                                label="Lending Tree Academy"
                            />

<FormControlLabel
                            data-aos-anchor-easing='ease-in-out'
                            data-aos='fade-left'
                            data-aos-offset='100'
                            data-aos-delay='600'
                                control={<Checkbox className='checkbox'  onChange={e => this.handleClick(e)}id='homeAcc' name="homeAcc" />}
                                label="Check Credit Score"
                            />
                            </FormGroup>
        </FormControl>

            {thankYou}

        </div>
        </div>
      

        <div className="serviceWrapper">
          <div className="serviceCenter">
            <h4            
            data-aos-anchor-easing='ease-in-out'
            data-aos='fade-up'
            data-aos-offset='200' 
            className="serviceTitle">
                Learn About the LendingTree Academy
            </h4>

           <Link to='/user/loans'>
           <div
            data-aos-anchor-easing='ease-in-out'
            data-aos='fade-up'
            data-aos-offset='200'
            className="serviceItem">
                <h5 className="serviceItemColor1"> Loan requests </h5>
                <h6 className="serviceText">View your offers</h6>
                <div className="serviceItemBtn1">
                Loan Requests
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
              <h5 className="serviceItemColor2"> Pay off your credit card debt with a loan </h5>
              <h6 className="serviceText">Get the most accurate savings alerts and cashflow analysis when you link your accounts to LendingTree.</h6>
              <div className="serviceItemBtn6">
               Save Money
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
              <h5 className="serviceItemColor3"> Need a new car? We can help </h5>
              <h6 className="serviceText">Comparison shop our auto loan lenders. Great cars are more affordable than you think.</h6>
              <div className="serviceItemBtn2">
                Take a Look
              </div>
            </div>
            </Link>
            <Link>
            <div 
                                                data-aos-anchor-easing='ease-in-out'
                                                data-aos='fade-up'
                                                data-aos-offset='200'
                                                data-aos-delay='150'
            className="serviceItem">
              <h5 className="serviceItemColor4"> Connect your bank accounts </h5>
              <h6 className="serviceText">Great score, but you need more available credit. A 0% transfer card may be a smart move.</h6>
              <div className="serviceItemBtn3">
                Do this
              </div>
            </div>
            </Link>
           <Link>
           <div 
                                                data-aos-anchor-easing='ease-in-out'
                                                data-aos='fade-up'
                                                data-aos-offset='200'
                                                data-aos-delay='200'
            className="serviceItem">
              <h5 className="serviceItemColor5"> You should increase your available credit </h5>
              <h6 className="serviceText">Great score, but you need more available credit. A 0% transfer card may be a smart move.</h6>
              <div className="serviceItemBtn4">
                Credit Alert
              </div>
            </div>
           </Link>
    
  
          </div>
        </div>

        <div className="academyCenter">
        <div className="academyWrapper">
          <h4 
                data-aos-anchor-easing='ease-in-out'
                data-aos='fade-left'
                data-aos-offset='100'
                data-aos-delay='200'
          className="academyTitle">
            Learn About the LendingTree Academy
          </h4>

          <img
                    alt="lendingTree Academy"
                    data-aos-anchor-easing='ease-in-out'
                    data-aos='fade-right'
                    data-aos-offset='100'
                    data-aos-delay='300'
          src="https://www.lendingtree.com/content/uploads/2019/03/bouquet-lt-academy.png" className="academyImage">

          </img>

            <a href="https://www.lendingtree.com/academy/">
            <button
              style={{
                width: "32rem",
                borderRadius: "3px",
                letterSpacing: "1.5px",
              }}
              id="greenButton"
              data-aos-anchor-easing='ease-in-out'
              data-aos='fade-left'
              data-aos-delay='400'
              data-aos-offset='-300'
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
              Learn more
            </button>
            </a>
        </div>
        </div>
      </div>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps, {logoutUser})(Dashboard);
