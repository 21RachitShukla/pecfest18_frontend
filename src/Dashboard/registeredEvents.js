import React, { Component } from 'react'
import './dashboard.css'

class registeredEvents extends Component {
    render(){
        return(
            <div>
                <div className="grid-event">
                    <div className="grid-item">{this.props.event}</div>
                    <div className="grid-item">{this.props.date}</div>
                    <div className="grid-item">{this.props.venue}</div>
                    <div className="grid-item">{this.props.time}</div>
                    <div className="grid-item">{this.props.timeofreg}</div>
                </div>
            </div>


        )
    }
}
export default registeredEvents;