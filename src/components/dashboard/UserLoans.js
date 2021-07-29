import React from 'react'

import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

import '../../assets/styles/profile.css'
import '../../assets/styles/dashboard.css'


import AOS from 'aos'
import 'aos/dist/aos.css'

class UserLoans extends React.Component {
    constructor() {
        super()
        this.state = {
            loans: [
                {
                    loanName: "Loan One",
                    loanType: "Home Loan",
                    creditScore: 600,
                    interestRate: 2.5
                },
                {
                    loanName: "Loan Two",
                    loanType: "Personal Loan",
                    creditScore: 700,
                    interestRate: 2
                },
                {
                    loanName: "Loan Three",
                    loanType: "Car Loan",
                    creditScore: 700,
                    interestRate: 3
                },
                {
                    loanName: "Loan Four",
                    loanType: "Home Loan",
                    creditScore: 500,
                    interestRate: 2.3
                }, {
                    loanName: "Loan Five",
                    loanType: "Personal Loan",
                    creditScore: 800,
                    interestRate: 3
                }, {
                    loanName: "Loan Six",
                    loanType: "Car Loan",
                    creditScore: 700,
                    interestRate: 3.5
                }, {
                    loanName: "Loan Seven",
                    loanType: "Car Loan",
                    creditScore: 700,
                    interestRate: 3
                }, {
                    loanName: "Loan Eight",
                    loanType: "Home Loan",
                    creditScore: 500,
                    interestRate: 2.3
                },
                {
                    loanName: "Loan Nine",
                    loanType: "Personal Loan",
                    creditScore: 600,
                    interestRate: 2.6
                },        
                {
                    loanName: "Loan Ten",
                    loanType: "Car Loan",
                    creditScore: 700,
                    interestRate: 2
                }
            ]
        }
    }

    async componentDidMount() {
        AOS.init({ // initialise with other settings
            duration: 1000
        });


    }
    render() {
        const {user} = this.props.auth;
        let userCredit = user.creditScore
        let {loans} = this.state
        let finalArr = []
        let arrayLength = loans.length
        for( var i = 0; i < arrayLength; i++){
            if(loans[i].creditScore <= userCredit){
                finalArr.push(loans[i])
                console.log(finalArr)
            }
            else {
                return(
                    <div id="loanthingythingthingthingthing" className="loanSection">
                    <div className="loanCenter3">
                        <h4 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceTitle twotime">
                            Your personal loans
                        </h4>
                        <h6 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceText twotime">No loans to show right now
                        </h6>
                   
                        </div>
                </div>
                )
            }
        }
        // filter loans array to remove any with higher credit score
        return (
            <div className="loanSection">
                <div className="loanCenter3">
                    <h4 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceTitle twotime">
                        Your personal loans
                    </h4>
                    <h6 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceText twotime">View your personal loans you're eligible for
                    </h6>
              
                    {
                    finalArr.map((loan, index) => {
                        return (
                            <div className="as">
                                <div key={index}>
                                    <div data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' data-aos-delay='100' className="serviceItem"
                                        key={
                                            index + 1
                                    }>
                                        <h5 className="serviceItemColor3">
                                            {
                                            loan.loanName
                                        } </h5>
                                        <h6 className="serviceText">
                                            {
                                            loan.loanType
                                        }</h6>
                                        <div id="qweqwe" className="serviceItemBtn1">
                                            Required cred: {
                                            loan.creditScore
                                        }   Intrest rate: {
                                            loan.interestRate
                                        }%
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                } </div>
            </div>
        )
    }
} UserLoans.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps, {logoutUser})(UserLoans);
