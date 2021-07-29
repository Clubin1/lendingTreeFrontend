import React, {Component} from "react";
import {Link, withRouter} from "react-router-dom";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registerUser} from "../../actions/authActions";
import classnames from "classnames";

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import '../../assets/styles/styles.css'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            studentAcc: false,
            homeAcc: false,
            personalAcc: false,
            errors: {}
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
    }
    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
          this.props.history.push("/dashboard");
        }
      }
    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };

    handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({
            [e.target.name]: value
        })
        console.log('12312312312312312312312312')
        console.log(this.state.personalAcc, 'personalacc')
        console.log(this.state.studentAcc, 'studentacc')
        console.log(this.state.homeAcc, 'homeacc')
      }

    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
            studentAcc: this.state.studentAcc,
            personalAcc: this.state.personalAcc,
            homeAcc: this.state.homeAcc
        };
        this.props.registerUser(newUser, this.props.history);
    };
    render() {
        const {errors} = this.state;
        return (<div className="formContainer">
            <div style={
                    {marginTop: "8rem",
                width:'50rem'}
                } className="row form">
                <div className="">
                    <Link to="/" className="btn-flat waves-effect">
                        <i className="material-icons left linkHover">keyboard_backspace</i>
                        Back to
                                      home
                    </Link>
                    <div className="col s12"
                        style={
                            {paddingLeft: "11.250px"}
                    }>
                        <h4>
                            <b>Register </b>
                            below
                        </h4>
                        <p className="grey-text text-darken-1">
                            Already have an account?
                            <Link className='textColor' to="/login"> Log in</Link>
                        </p>
                    </div>
                    <form noValidate
                        onSubmit={
                            this.onSubmit
                    }>
                        <div className="input-field col s12">
                            <input onChange={
                                    this.onChange
                                }
                                value={
                                    this.state.name
                                }
                                error={
                                    errors.name
                                }
                                id="name"
                                type="text"
                                className={
                                    classnames("", {invalid: errors.name})
                                }/>
                            <label htmlFor="name">Name</label>
                            <span className="red-text"> {
                                errors.name
                            }</span>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={
                                    this.onChange
                                }
                                value={
                                    this.state.email
                                }
                                error={
                                    errors.email
                                }
                                id="email"
                                type="email"
                                className={
                                    classnames("", {invalid: errors.email})
                                }/>
                            <label htmlFor="email">Email</label>
                            <span className="red-text"> {
                                errors.email
                            }</span>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={
                                    this.onChange
                                }
                                value={
                                    this.state.password
                                }
                                error={
                                    errors.password
                                }
                                id="password"
                                type="password"
                                className={
                                    classnames("", {invalid: errors.password})
                                }/>
                            <label htmlFor="password">Password</label>
                            <span className="red-text"> {
                                errors.password
                            }</span>
                        </div>
                        <div className="input-field col s12">
                            <input onChange={
                                    this.onChange
                                }
                                value={
                                    this.state.password2
                                }
                                error={
                                    errors.password2
                                }
                                id="password2"
                                type="password"
                                className={
                                    classnames("", {invalid: errors.password2})
                                }/>
                            <label htmlFor="password2">Confirm Password</label>
                            <span className="red-text"> {
                                errors.password2
                            }</span>
                        
                        </div>
                        <p className='grey-text text-darken-1'>
                            Choose what type of account
                        </p>
             
                        <FormControl component="fieldset" >
                            <FormGroup>
                            <FormControlLabel
                                control={<Checkbox className='checkbox' id='studentAcc' onChange={e => this.handleChange(e)} name="studentAcc" />}
                                label="Student Account"
                            />
                            <FormControlLabel
                                control={<Checkbox className='checkbox' id='personalAcc'  onChange={e => this.handleChange(e)} name="personalAcc" />}
                                label="Personal Account"
                            />
                            <FormControlLabel
                                control={<Checkbox className='checkbox' id='homeAcc'  onChange={e => this.handleChange(e)} name="homeAcc" />}
                                label="Home Account"
                            />
                            </FormGroup>
                        </FormControl>
                        <div className="col s12"
                            style={
                                {paddingLeft: "11.250px"}
                        }>
                            <button style={
                                    {
                                        width: "100%",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                    }
                                }
                                type="submit"
                                id='greenButton'
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>);
    }
} Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth, errors: state.errors});
export default connect(mapStateToProps, {registerUser})(withRouter(Register));
