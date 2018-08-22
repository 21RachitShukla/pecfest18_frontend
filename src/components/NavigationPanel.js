import React , { Component }from 'react';
import '../SignUpOrLoginForm.css';
import {MdArrowBack} from 'react-icons/lib/md';
import {FaCircle} from 'react-icons/lib/fa';
import { withRouter } from 'react-router-dom';
class NavigationPanel extends Component{
	constructor(props){
		super(props);
	}
	handleCancel = () => {

		let continueUrl = '/';
		let search = this.props.location.search.slice('/'.length);
		if (search.length > 0) {
			continueUrl = search;
		}
		this.props.history.push(continueUrl);
	}
render(){
	return (
		<div className='NavigationPanel' onClick={window.location.pathname.startsWith('/register') ? this.handleCancel : this.props.onCancel}>
			<MdArrowBack  className='back'/>
		</div>
	);
}

}

export default withRouter (NavigationPanel);
