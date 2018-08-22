import React from 'react';
import PropTypes from 'prop-types';
import '../SignUpOrLoginForm.css';
import {MdArrowForward} from 'react-icons/lib/md';

const SubmitButton = (props) => {

	let socialNets = null;

	if (props.type == 'signIn') {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	} else {
		socialNets = (
			<div className='socialNets'>
			</div>
		)
	}
	return (
		<div className={'submitButton'}>
            <div className='socialNets'>
            </div>
			<button className={props.type=='signIn' ? 'submitSignIn' : 'submitSignUp'}><MdArrowForward/></button>
		</div>
	);
}

SubmitButton.PropTypes = {
	type: PropTypes.String
};

export default SubmitButton;
