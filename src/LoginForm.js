import React, { Component } from 'react';
import Loader from './Loader';
import user from './user';
import './SignUpOrLoginForm.css';
import {MdArrowForward} from 'react-icons/lib/md';
import { Redirect } from 'react-router-dom';
import './SignUpForm.css';
import 'md5';
import Dashboard from './Dashboard';
class ForgotIDForm extends Component {
    state = {
        status: '',
        username: '',
        done: false,
        forgotBack: false
    }

    handleSubmit = (event) => {
        event.stopPropagation();
        event.preventDefault();
        this.setState({ status: <Loader color="rgba(0, 0, 0, 0.5)" /> });
        user.sendIDToEmail(this.state.username, {
            onSuccess: (res) => {
                this.setState({status: res.message, done: true })
                setTimeout(this.props.onSuccess, 1000);
            },
            onFailed: (res) => {
                this.setState({ status: res.message })
            }
        })
    };

    handleDone = ({ target }) => {
        this.setState({ username: target.value })
    };

    handleForgotBack = ({ target}) => {
        this.setState.forgotBack = true
    };

    render() {
        return (<div>
                <h2>FOFGOT PASSWORD</h2>
            <form className={"SignUpForm"} onSubmit={this.handleSubmit}>
                <div className="SignUpElement">
                    <p>Please enter your registered email ID.</p>
                    <div className="StatusMessage">
                        {this.state.status}
                    </div>
                    <div className="Input">
                        <GetEmail ref="username" done={this.handleDone}/>
                    </div>
                </div>
                <div className={'submitButtonLogin'}>
                    <button type={'submit'} className={'submitSignIn'} onSubmit={this.handleSubmit}><MdArrowForward/></button>
                </div>
            </form>
        </div>
        )
    }
}

const emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const mobre = /[0-9]{10,10}/;

class GetEmail extends Component {
    state = {
        username: '',
        error: true,
    }

    get() {
        return this.state.username;
    }

    handleNext = ({ target }) => {
        this.setState({ error: !(target.value.match(emailre) || target.value.match(emailre))})
        this.props.done({ username: this.state.email ,
            error: !target.value.match(emailre)});

    }

    handleChange = ({ target }) => {
        this.setState({ username: target.value });
    }

    render() {
        return (
            <input
                id="username"
                type="text"
                autoComplete = "off"
                required
                name = "username"
                placeholder="username"
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
    };

    get() {
        return this.state.pwd;
    }

    handleNext = ( { target }) => {
        this.setState({ error: !target.value.match(pwdre)});
        this.props.done({ pwd: this.state.pwd });
    };


    isValid() {
        return !this.state.error;
    }

    handleChange = ({ target }) => {
        this.setState({ pwd: target.value });
    };

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

var md5 = require('md5');

export default class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            pwd: '',
            error: false,
            loggingin: false,
            done: false,
            forgot: false,
        };
        this.username = React.createRef();
        this.password = React.createRef();

    }

    handleDone = (prop) => {
        const user = Object.assign({}, this.state.user, prop);
        this.setState({ user, disabled: false });
    };

    handleFailed = (emailId) => {
        this.setState({ error: true, loggingin: false });
    };

    handleSuccess = (emailId) => {
        this.setState({ error: false, loggingin: true, done: true });
        this.history.replace('/');
        this.props.onLogin(emailId);
    };

    handleClick = () => {
        this.setState({username: document.getElementById('username').value, pwd: md5(document.getElementById('password').value)});
        const newUser = {
            username: this.username.current.get(),
            password : md5(this.password.current.get())
        };
        this.setState({ user: newUser } );
        user.login(newUser, {
            onSuccess: this.handleSuccess,
            onFailed: this.handleFailed
        });

        this.setState({ loggingin: true })
    };

    handleOnForgotPassword = () => {
        this.setState({ forgot: true })
    };

    componentDidMount() {

    }

    render() {
        const style = {};

        if (this.state.error) {
            style.color = 'red';
        }

        if(this.state.loggingin && this.state.done){
            return <Redirect push to="/dashboard" exact component={ () => <Dashboard user={user} login={true}/>} />
        }

        if (this.state.forgot) {
            return <ForgotIDForm onSuccess={() => this.setState({ forgot: false })} />
        }

        return (
            <div>
                <form>
                <h2>SIGN IN</h2>
                <div>
                    <div className="Input">
                        <GetEmail ref={this.username} done={this.handleDone}/>
                    </div>
                    <div className="Input">
                        <GetPassword ref={this.password} done={this.handleDones}/>
                    </div>
                    <div className={'submitButtonLogin'}>
                        <button className={'submitSignIn'} disabled={this.state.loggingin || this.state.error}
                                onClick={this.handleClick}><MdArrowForward/></button>
                    </div>
                    <div className="Input">
                        <a className='forgotPass' onClick={this.handleOnForgotPassword}>Forgot
                            password?</a>
                    </div>
                </div>
                </form>
            </div>

        );
    }
}