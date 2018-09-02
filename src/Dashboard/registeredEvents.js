import React, { Component } from 'react'
import './registeredEvents.css'

class registeredEvents extends Component {
    render(){
    	var timeline_content;
    	// console.log("key is " + this.props._key);
    	if(this.props._key%2==0)
    	{
    		timeline_content =
    			<div className="timeline-content">
					<h2>LOREM IPSUM DOLOR</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
						Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
					</p>
					<a href="#" className="btn">button</a>
				</div>
    	}
    	else
    	{
    		timeline_content = 
    			<div className="timeline-content right">
					<h2>LOREM IPSUM DOLOR</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
						Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
					</p>
					<a href="#" className="btn">button</a>
				</div>
    	}

        return(
		<div id="timeline">
			<div className="timeline-item">
				<div className="timeline-icon"></div>
				<div>
					{timeline_content}
				</div>
			</div>
		</div>
        )
    }
}
export default registeredEvents;