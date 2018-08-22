import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import user from './user';
import SubmitButton from './components/SubmitButton';
import {MdArrowForward} from 'react-icons/lib/md';
import 'md5';
import './SignUpOrLoginForm.css';
import './SignUpForm.css';
import { Redirect } from 'react-router-dom';
import dashboard from './Dashboard';
class VerifyOtpForm extends Component {
    state = {
        status: '',
        otp: '',
        done: false,
        forgotBack: false,
        disabled: false,
        checking: false,
    };

    handleFailed = (err) => {
        console.log(err);

        this.setState({
            checking: false,
            error: true,
            message: err.message,
        })
    };

    handleNext = () => {
        user.verifyOtp(this.state.otp, this.props.mobile, { onSuccess: (id) => {
                this.props.done(id)
                setTimeout(this.props.onSuccess, 1000);
            },
            onFailed: this.handleFailed });
        this.setState({ checking: true });
    };

    handleChange = ({ target }) => {
        this.setState({ otp: target.value, error: false });
    };


    render() {
        return (<div>
                <h2>Verify OTP</h2>
                <form className={"SignUpForm"} onSubmit={this.handleNext}>
                    <div className="SignUpElement">

                        <p>OTP sent on your registered mobile number.</p>
                        <div className="StatusMessage">
                            {this.state.status}
                        </div>
                        <div className="Input">
                            <input
                                id="otp"
                                ref = "otp"
                                disabled={this.state.checking}
                                type="password"
                                autoComplete={false}
                                required
                                placeholder="Enter OTP"
                                onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className={'submitButtonLogin'}>
                        <button type={'submit'} className={'submitSignUp'} onSubmit={this.handleNext}><MdArrowForward/></button>
                        {
                            this.state.error ? <p>{this.state.message}</p> : ""
                        }
					</div>
                </form>
            </div>
        );
    }
}

class GetFirstName extends Component {
    state = {
        fName: '',
    }

    handleNext = () => {
        this.props.done({ fName : this.state.fName});
    }

    isValid() {
        var res = this.state.fName.split(" ");
        if(res.length > 1){
            return false;
        }
        return this.state.fName.length > 2;

    }
    handleChange = ({target}) => {
        this.setState({fName : target.value});
    }
    get() {
        return this.state.fName;
    }


    render() {
        return (

            <input
                id="firstName"
                type="text"
                autoComplete="false"
                required
                name="firstName"
                placeholder="firstName"
                onChange={this.handleChange}/>

        )
    }
}

class GetLastName extends Component {

    state = {
        lName : '',
    }
    handleNext = () => {
        this.props.done({ lName : this.state.lName});
    }

    isValid() {
        var res = this.state.lName.split(" ");
        if(res.length > 1){
            return false;
        }
        return this.state.lName.length > 2;

    }
    handleChange = ({target}) => {
        this.setState({lName : target.value});
    }
    get() {
        return this.state.lName;
    }


    render() {
        return (
            <input
                id="lastName"
                type="text"
                autoComplete="false"
                required
                name="lastName"
                placeholder="lastName"
                onChange={this.handleChange}/>

        )
    }

}

class GetNumber extends Component {
    state = {
        mobile:' ',
        error: true,
    }

    get() {
        return this.state.mobile;
    }

    handleNext = ({ target }) => {
        this.setState({ error: !target.value.match(/[0-9]{10,10}/) })
        this.props.done({ mobile: this.state.mobile });
    }

    isValid() {
        return !this.state.error;
    }

    handleChange = ({ target }) => {
        this.setState({ mobile: target.value,});
    }

    render() {
        return (
            <input
                id="mobile"
                type="numeric"
                autoComplete="false"
                required
                name="mobileNumber"
                placeholder="Contact No."
                onChange={this.handleChange}/>
        )
    }

}

class GetCollege extends Component {
    state = {
        college: '',
    };

    handleNext = () => {
        this.props.done({ college: this.state.college });
    };

    get() {
        return this.state.college;
    }

    isValid() {
        return this.state.college.length !== 0;
    }

    handleChange = ({ target }) => {
        this.setState({ college: target.value });
    };

    render() {
        return (
            <input
                id="collegeName"
                type="text"
                autoComplete="false"
                required
                name = "collegeName"
                placeholder="College/University"
                onChange={this.handleChange}/>
        )
    }
}

const emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class GetEmail extends Component {
    state = {
        email: '',
        error: true,
    }

    get() {
        return this.state.email;
    }

    handleNext = ({ target }) => {
        this.setState({ error: !target.value.match(emailre)})
        this.props.done({ email: this.state.email ,
            error: !target.value.match(emailre)});

    }

    handleChange = ({ target }) => {
        this.setState({ email: target.value });
    }

    render() {
        return (
            <input
                id="emailId"
                type="email"
                autoComplete = "off"
                required
                name = "emailId"
                placeholder="example@example.com"
                onChange={this.handleChange}
                on/>
        )
    }
}

const pwdre = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}))$/;

class GetPassword extends Component {
    state = {
        pwd : '',
        error: true,
    }

    get() {
        return this.state.pwd;
    }

    handleNext = ( { target }) => {
        this.setState({ error: !target.value.match(pwdre)});
        this.props.done({ pwd: this.state.pwd });
    }


    isValid() {
        return !this.state.error;
    }

    handleChange = ({ target }) => {
        this.setState({ pwd: target.value });
    }

    render() {
        return (
            <input
                id="password"
                type="password"
                required
                name = "password"
                autoComplete="false"
                placeholder="Password"
                onChange={this.handleChange}/>
        )
    }

}

class GetGender extends Component {
    state ={
        gender:'Male',
    };

    get(){
        return this.state.gender;
    }

    onChange = ({ event }) => {
        this.setState({gender : document.getElementById('genderSelect').value});
    };

    render() {
        return (
            <div className="InputLabel">
                <label><select id ="genderSelect" name="gender" onChange={this.onChange}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select> Gender</label>
            </div>
        )
    }
}

class GetAccomodationDetails extends Component {
    state = {
        accomodation : '0',
    }

    get() {
        return this.state.accomodation;
    }

    onChange = ({ event }) => {
        this.setState({accomodation : document.getElementById('accomodation').value});
    }

    render() {
        return (
            <div class="InputLabel">
                <label><input id={'accomodation'}  type="checkbox" name="accomodation" value='1' onChange={this.onChange}/>  Accomodation? </label>
            </div>

        )
    }
}

class FinalStep extends Component {
    render() {
        return (
            <div className="FinalStep">
                <p className="SignUpForm-description">
                    Your PECFEST ID is <span className="pecfestId">{this.props.pecfestId}</span>
                    <br />
                    Now you can login and start registering for events.
                </p>
                <div className="Control-buttons">
                    <button className="SignUpNextButton" onClick={() => this.props.done(this.props.pecfestId)}>
                        Continue
                    </button>
                </div>
            </div>
        )
    }
}


export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flexState: false,
            animIsFinished: false,
            done: false,
            submitting: false,
            disabled: true,
            gender: "Male",
            accomodation: 0,
			message:'',
            otpForm: false,
            signIn: false,
        };
        this.fName = React.createRef();
        this.lName = React.createRef();
        this.email = React.createRef();
        this.mobileNumber = React.createRef();
        this.college = React.createRef();
        this.gender = React.createRef();
        this.accomodation = React.createRef();
        this.password = React.createRef();
        this.handleSignUp = this.handleSignUp.bind(this);
    }


    isFinished = () => {
        this.setState({animIsFinished: true});
    };

    handleDone = (prop) => {
        const user = Object.assign({}, this.state.user, prop);
        this.setState({ user, disabled: false });
    };

    handleLogIn = event => {

    };

    handleVerifyOtp = () => {
        this.setState({ otp: true })
    };

    handleSignUp = event => {
        event.preventDefault();

        const errors = [];
        if (!this.fName.current.isValid()) {
            errors.push('First Name');
        }

        if (!this.lName.current.isValid()) {
            errors.push('Last Name');
        }

        if (!this.email.current.get().match(emailre)) {
            errors.push('Email')
        }

        if (!this.mobileNumber.current.get().match(/[0-9]{10,10}/)) {
            errors.push('Mobile')
        }

        if (!this.college.current.isValid()) {
            errors.push('College');
        }

        if (errors.length > 0) {
            const message = errors.join(', ') + (errors.length == 1 ? ' is ' : ' are ') + 'invalid.';
            this.setState({disabled: true, error: true, message: message});
            return;
        }
        var md5 = require('md5');
        const newUser = {
            firstName: this.fName.current.get(),
            lastName : this.lName.current.get(),
            email: this.email.current.get(),
            mobile: this.mobileNumber.current.get(),
            college: this.college.current.get(),
            accomodation: this.accomodation.current.get(),
            gender: this.gender.current.get(),
            password : md5(this.password.current.get())
        };
        this.setState({ user: newUser } );

        user.signUp(newUser, {
            onSuccess: (res) => {
                user.checkVerified(this.state.user.mobile, {
                    onSuccess: verified => {
                        console.log(verified);
                        if (verified) {
                            // send user to the login page
                            //this.props.onContinueToLogin()
                            this.setState({ signIn: true});

                        } else {
                            this.setState({ submitting: false, otp: true, pecfestId: res.pecfestId, otpForm: true });

                        }
                    },
                    onFailed: (err) => {
                        this.setState({ submitting: false, error: true, message: err.message || 'Unknown error occured.' });
                    }
                })
            },
            onFailed: (err) => {
                if (typeof err.ACK !== 'undefined') {
                    if (err.ACK === 'ALREADY') {
                        this.setState({ message: 'Account already exists. Verifying...' });
                        user.checkVerified(this.state.user.mobile, {
                            onSuccess: verified => {
                                console.log(verified);
                                if (verified) {
                                    // send user to the login page
                                    //this.props.onContinueToLogin()
                                    this.setState({ signIn: true});
                                } else {
                                    this.setState({ submitting: false, otp: true, otpForm: true })
                                }
                            },
                            onFailed: (err) => {
                                this.setState({ submitting: false, error: true, message: err.message || 'Unknown error occurred 2' });
                            }
                        })
                    }
                }
            }
        });

        this.setState({ submitting: true, submitMessage: 'Verifying account...' });
    };


    handleAccomo = ({ target }) => {
        const user = { accomodation: target.checked - 0 };
        this.setState({ accomodation: user.accomodation, disabled: false })
    };


    handleChange = event => {
        this.setState({ gender: event.target.value, disabled: false })
    };

    handleId = id => {
        this.props.onSignUp(id);
    };

    renderLoadingOrOtp() {
        if (this.state.submitting) {
            return (
                <div className="SignUpForm-submitting">
                    <p className="SignUpForm-otp-message">{this.state.submitMessage}</p>
                </div>
            );
        }

        // if (this.state.done) {
        return (
            <FinalStep pecfestId={this.state.pecfestId} done={this.props.onSignUp} />
        )
        // }
    }

	render() {
        if (this.state.otpForm) {
            return (
				<VerifyOtpForm onSuccess={() => this.setState({ otpForm: false })} mobile={this.mobileNumber.current.get()} />

            )
        }

        if(this.state.signIn){
            return <Redirect push to="/dashboard" exact component={ () => <dashboard user={user} login={true}/>} />
        }

		return (
            <div>
                <h2>SIGN UP</h2>
                <p>{this.state.message}</p>
				<form onSubmit={this.handleSignUp} autoComplete={false}>
                <div className="Input">
                    <GetFirstName ref={this.fName} done={this.handleDone}/>
                    <GetLastName ref={this.lName} done={this.handleDone}/>
                </div>
                <div className="Input">
                    <GetNumber ref={this.mobileNumber} done={this.handleDone}/>
                    <GetCollege ref={this.college} done={this.handleDone}/>
                </div>
                <div className="Input">
                    <GetEmail ref={this.email} done={this.handleDone}/>
                    <GetPassword ref={this.password} done={this.handleDone}/>
                </div>
                <div className={'Input'}>
                    <GetGender ref={this.gender} done={this.handleDone}/>
                    <GetAccomodationDetails ref={this.accomodation} done={this.handleDone}/>
                </div>
                <SubmitButton type={this.props.type} disabled={this.props.disabled} onSubmit={this.handleSignUp} onClick={this.handleVerifyOtp}/>
				</form >
			</div>
		)
	}
}
