import React from 'react'

import PropTypes from "prop-types";
import {connect} from "react-redux";

import '../../assets/styles/profile.css'
import '../../assets/styles/dashboard.css'
import {updateUser} from "../../actions/authActions";


import AOS from 'aos'
import 'aos/dist/aos.css'

class Tasks extends React.Component {
    constructor() {
        super()
        this.state = {
            tasks: [
                {
                    loanName: "Task One",
                    loanType: "Home Loan",
                    interestRate: 1000
                },
                {
                    loanName: "Task Two",
                    loanType: "Personal Loan",
                    interestRate: 2000
                },
                {
                    loanName: "Task Three",
                    loanType: "Car Loan",
                    interestRate: 10000
                },
                {
                    loanName: "Task Four",
                    loanType: "Home Loan",
                    interestRate: 20000
                }, {
                    loanName: "Task Five",
                    loanType: "Personal Loan",
                    interestRate: 5000

                }, {
                    loanName: "Task Six",
                    loanType: "Car Loan",
                    interestRate: 9000

                }, {
                    loanName: "Task Seven",
                    loanType: "Car Loan",
                    interestRate: 10000

                }, {
                    loanName: "Task Eight",
                    loanType: "Home Loan",
                    interestRate: 1000

                },
                {
                    loanName: "Task Nine",
                    loanType: "Personal Loan",
                    interestRate: 2000

                },        
                {
                    loanName: "Task Ten",
                    loanType: "Car Loan",
                    interestRate: 4000

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
        let userID = this.props.auth.user.id
        let removePeople = (e) => {
            var array = [this.state.tasks]; // make a separate copy of the array
            var finalArr = array[0]
            var index = e.target.value

            if(index !== -1){
                finalArr.splice(index, 1)
                this.setState({task: array})
            }
            console.log(user.name,'sa;lkdfjsa;dlkfjs-------')
            const userData = {
                name: user.name, 
                levelExp: user.levelExp++
            }
            this.props.updateUser(userData, userID);        }
      return(
        <div className="loanSection">
        <div className="loanCenter3">
            <h4 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceTitle twotime">
                Your personal loans
            </h4>
            <h6 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceText twotime">View your personal loans you're eligible for
            </h6>
            <h6 data-aos-anchor-easing='ease-in-out' data-aos='fade-up' data-aos-offset='200' className="serviceText twotime">Your Wallet: ${user.bankSum}
            </h6>
            {
            this.state.tasks.map((loan, index) => {
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
                                <div id="qweqwe" className="serviceText">
                                    Cost: ${
                                    loan.interestRate
                                }
                                </div>
                                <button
                                  id="greenButton"
                                  onClick={removePeople}
                                  value={index}
                                  style={{
                                    width: "10rem",
                                  }}
                                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                >
                Complete Task
              </button>
                            </div>
                        </div>
                    </div>
                );
            })
        } </div>
    </div>
      )
    }
} Tasks.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps, {updateUser})(Tasks);
