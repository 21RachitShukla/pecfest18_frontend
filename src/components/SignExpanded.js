import React , {Component} from 'react';
import PropTypes from 'prop-types';
import '../SignUpOrLoginForm.css';
import {Motion, spring} from 'react-motion';
import Input from './Input';
import SubmitButton from './SubmitButton';
import '../user.js';
import user from '../user';
import LoginForm from '../LoginForm.js';
import SignUpForm from '../SignUpForm';
import 'md5';
import '../SignUpForm.css';

const emailre = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const pwdre = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}))$/;

class SignExpanded extends Component {

	InputSignIn() {
		var SignInInput;
		if(this.props.type === 'signIn'){
			SignInInput = <div>
                <LoginForm/>
			</div>
		}
		else{
			SignInInput = <div>
                <SignUpForm/>
            </div>
		}
		return SignInInput;
	}



    constructor(props) {
		super(props);
		this.state = {
			flexState: false,
			animIsFinished: false,

		};
    }

    componentDidMount () {
     	this.setState({flexState: !this.state.flexState});
  	}


    isFinished = () => {
		this.setState({animIsFinished: true});
    };



	render () {

		return (
			<Motion style={{
				flexVal: spring(this.state.flexState ? 8 : 1)
			}} onRest={this.isFinished}>
			{({flexVal}) =>
			<div className={this.props.type==='signIn' ? 'signInExpanded' : 'signUpExpanded'} style={{
				flexGrow: `${flexVal}`
			}}>
				<Motion style={{
					opacity: spring(this.state.flexState ? 1 : 0,{stiffness: 300, damping: 17}),
					y: spring(this.state.flexState ? 0 : 50, {stiffness: 100, damping: 17})
				 }} >
						{({opacity, y}) =>
						<div className='logForm' style={{
							WebkitTransform: `translate3d(0, ${y}px, 0)`,
							transform: `translate3d(0, ${y}px, 0)`,
							opacity: `${opacity}`
						}} name="formData">
							{this.InputSignIn()}

						</div>
						}
				</Motion>
			</div>
		}
			</Motion>
		);
	}

}



SignExpanded.PropTypes ={
	type: PropTypes.string
};

export default SignExpanded;
