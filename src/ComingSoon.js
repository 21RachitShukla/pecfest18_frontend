import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ComingSoon extends Component {
	handleClick = () => {
		this.props.history.goBack();
	}

	render() {
		return (
			<div className="ComingSoon" style={{ padding: '2em', margin: '1em', textAlign: 'center', verticalAlign: 'middle', color: 'white', fontSize: '2rem' }}>
				<p>Coming Soon.</p>
				<a onClick={this.handleClick} href="#">Return to previous page</a>
			</div>
		)
	}
}

export default withRouter(ComingSoon);
