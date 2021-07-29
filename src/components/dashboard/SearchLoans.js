import React from 'react'

import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logoutUser} from "../../actions/authActions";

import '../../assets/styles/profile.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

class SearchLoans extends React.Component {
    constructor() {
        super()
        this.state = {
            loans: [
                {
                    loanName: "Loan One",
                    loanType: "Home Loan",
                    creditScore: 600,
                    interestRate: 2.5
                }, {
                    loanName: "Loan Two",
                    loanType: "Personal Loan",
                    creditScore: 700,
                    interestRate: 2
                }, {
                    loanName: "Loan Three",
                    loanType: "Car Loan",
                    creditScore: 700,
                    interestRate: 3
                }, {
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
            ],
            inputValue: ''
        }
    }
    filterOnChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    async componentDidMount() {
        AOS.init({ // initialise with other settings
            duration: 1000
        });
    }
    render() {
        // Filter loans based off search bar
        let filterdLoans = this.state.loans.filter(loan => {
            return (
                loan.loanName.toLowerCase().match(this.state.inputValue.toLowerCase()) ||  loan.loanType.toLowerCase().match(this.state.inputValue.toLowerCase()) 
            )
        })
        console.log(this.state.inputValue)
        return (
            <div className="loanSection">
                <div className="loanCenter">
                    <h4 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceTitle twotime">
                        Use our loan search engine
                    </h4>
                    <h6 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceText twotime">Look at all the loans we have to offer
                    </h6>
                    <div
                    id="asdasdasdasdasdasdasd"
                    data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="input-field ">
                        <input value={this.state.inputValue} onChange={this.filterOnChange} id="password2" type="text"/>
                        <label htmlFor="password2">Search by name, rates, scores etc</label>
                    </div>

                    {
                    filterdLoans.map((loan, index) => {
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
                                        } Intrest rate: {
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
} SearchLoans.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps, {logoutUser})(SearchLoans);
