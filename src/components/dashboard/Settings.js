import React from 'react'

import PropTypes from "prop-types";
import {connect} from "react-redux";

import {updateImage} from "../../actions/authActions";


import '../../assets/styles/profile.css'
class Settings extends React.Component {

    constructor() {

        super();
        this.state = {

            name: "",
            email: "",
            bankAccount: "",
            bankSum: "",
            levelExp: "",
            creditScore: "",
            fileInput: "",
            selectedFile:"",
            previewSource:"",
            imageURL: ""
        };
    }
    onChange = e => {
        this.setState({[e.target.id]: e.target.value});
    };
    onSubmit = e => {
        e.preventDefault();
        let userID = this.props.auth.user.id
        const userData = {
            name: this.state.name,
            email: this.state.email,
            bankAccount: this.state.bankAccount,
            bankSum: this.state.bankSum,
            levelExp: this.state.levelExp,
            creditScore: this.state.creditScore
        };
        this.props.updateUser(userData, userID);
    };

    componentDidMount() {
        const {user} = this.props.auth
        console.log(user)
    }
    render() {
        const {user} = this.props.auth;

        const handleFileInputChange = (e) => {
            const file = e.target.files[0]
            previewFile(file);
            this.setState({selectedFile : file})
            this.setState({selectedFile : e.target.value})
        }

        const handleSubmitFile = (e) => {
            console.log("submitt")
            e.preventDefault()
            if(!this.state.previewSource) return
            uploadImage(this.state.previewSource)
        }

        const uploadImage = async (base64EncodedImage) => {
            let userID = this.props.auth.user.id
            try {
                await fetch("https://lendingbackend.herokuapp.com/settings/upload/image", {
                    method: 'POST',
                    body: JSON.stringify({data: base64EncodedImage}),
                    headers: {'Content-type': 'application/json'}
                }).then(async res => 
                    {
                        const data = await res.json()
                        this.setState({imageURL: data.data})
                    })
            } catch (error) {
                console.error(error)
            }
            const userData = {
                imageURL: this.state.imageURL
            }
            this.props.updateImage(userData, userID); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
        }

        const previewFile = (file) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                const data = reader.result
                this.setState({previewSource : data})
            }
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
                    <h4>Edit your profile, {
                        user.name.charAt(0).toUpperCase() + user.name.slice(1)
                    }</h4>
                    <div className="userPfpCol">
                        <div className="userButton"></div>
                        <img 
                    alt="profileLogo"
                    src={pfp} className="userImage">
                    </img>
                    </div>
                    <div className="btnRow">
                      <form onSubmit={handleSubmitFile}>
                        <input type="file" name="image" onChange={handleFileInputChange} value={this.fileInput} className="form-input">

                        </input>
                        <button style={
                                {
                                    width: "10rem",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"

                                }
                            }
                            id="greenButton"
                            type="submit"
                            className="btn profileBtn2 btn-large waves-effect waves-light hoverable blue accent-3">
                            Save
                        </button>
                      </form>

             
                    </div>
                </div>

                <div className="formContainer">
                    <div style={
                            {height: '47rem'}
                        }
                        className="row thingythingthing">
                        <form noValidate
                        >

                            <div className="input-field col s12">
                                <input onChange={
                                        this.onChange
                                    }
                                    value={
                                        this.state.name
                                    }
                                    id="name"
                                    type="email"/>
                                <label htmlFor="name">Name on Account</label>

                            </div>
                            <div className="input-field col s12">
                                <input onChange={
                                        this.onChange
                                    }
                                    value={
                                        this.state.email
                                    }
                                    id="email"
                                    type="email"/>
                                <label htmlFor="email">Email</label>

                            </div>


                            <div className="input-field col s12">
                                <input onChange={
                                        this.onChange
                                    }
                                    value={
                                        this.state.bankAccount
                                    }
                                    id="bankAccount"
                                    type="email"/>
                                <label htmlFor="bankAccount">Bank Account</label>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={
                                        this.onChange
                                    }
                                    value={
                                        this.state.bankSum
                                    }
                                    id="bankSum"
                                    type="email"/>
                                <label htmlFor="bankSum">Wallet Sum</label>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={
                                        this.onChange
                                    }
                                    value={
                                        this.state.levelExp
                                    }
                                    id="levelExp"
                                    type="email"/>
                                <label htmlFor="levelExp">Level Expierence</label>
                            </div>

                            <div className="input-field col s12">
                                <input onChange={
                                        this.onChange
                                    }
                                    value={
                                        this.state.creditScore
                                    }
                                    id="creditScore"
                                    type="email"/>
                                <label htmlFor="creditScore">Credit Score</label>
                            </div>
                            <div className="input-field col s12"></div>

                            <button style={
                                    {
                                        width: "95.5%",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px",
                                        marginTop: "1rem",
                                        marginLeft: ".7rem"
                                    }
                                }
                                type="submit"
                                id="greenButton"
                                className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                                Save changes
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
} Settings.propTypes = {
    updateImage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({auth: state.auth});
export default connect(mapStateToProps, {updateImage})(Settings);
