import React, {Component} from 'react';
import './SignUpOrLoginForm.css';
import {withRouter} from 'react-router-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Motion, spring} from 'react-motion';
import NavigationPanel from './components/NavigationPanel';
import Modal from './components/Modal';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import './FrontSlide.css';

class SignUpORLoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            module: 'SignUp',
            mounted: false,
            btnClass: 'btn',
            hover: false
        };
    }

    componentDidMount() {
        if (window.checkIfMobile()) {
            document.body.style.overflow = 'auto';
        }
        this.setState({mounted: true});
    }

    componentWillUnmount() {
        if (window.checkIfMobile()) {
            document.body.style.overflow = '';
        }
        this.setState({mounted: false});
    }

    handleSubmit = (e) => {
        this.setState({mounted: false});
        e.preventDefault();
    }

    handleModuleLogin = (e) => {
        this.setState({module: 'Login'});
        e.preventDefault();
    };

    handleHover = (e) => {
        this.setState({hover: true});
        e.preventDefault();
    };

    handleHoverOut = (e) => {
        this.setState({hover: false});
        e.preventDefault();
    };

    handleModuleSignUp = (e) => {
        this.setState({module: 'SignUp'});
        e.preventDefault();
    };


    render() {
        const {mounted} = this.state;

        let child;
        let test = 12;

        if (mounted) {
            child = (
                <div className="App_test">
                    <NavigationPanel></NavigationPanel>
                    <Modal onSubmit={this.handleSubmit}/>
                </div>
            );
        }
        let module_page = (<SignUpForm/>);
        if (this.state.module === 'Login') {
            module_page = (
                <LoginForm/>
            );
        }
        else {
            module_page = (
                <SignUpForm/>
            );
        }
        if (!window.checkIfMobile()) {
            return (
                <div className="App">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {child}
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
        else {
            return (
                <div>
                    <div className="row">
                        <div style={{padding: '10px'}} className="FrontSlide-register animated" onClick={this.handleModuleLogin}>
                            <a className="btn-2" href="#"> Login </a>
                        </div>
                        <div style={{padding: '10px'}} className="FrontSlide-register animated" onClick={this.handleModuleSignUp}>
                            <a className="btn-2" href="#"> Sign Up </a>
                        </div>
                    </div>
                    {module_page}
                </div>
            );
        }
    }
}

export default withRouter(SignUpORLoginForm);
