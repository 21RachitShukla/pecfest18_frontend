import React, { Component } from 'react'
import './dashboard.css'

class notification extends Component {
    render(){
        return(
            <div>
                <div className="grid-event">
                    <div className="grid-item">{this.props.event}</div>
                    <div className="grid-item">{this.props.notificationTitle}</div>
                    <div className="grid-item3">{this.props.notificationDetails}</div>
                </div>
            </div>


        )
    }
}
export default notification;