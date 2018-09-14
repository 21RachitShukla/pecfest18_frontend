import React, { Component } from 'react'
import './notification.css'

class notification extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.event}</td>
                <td>{this.props.notificationTitle}</td>
                <td>{this.props.notificationDetails}</td>
            </tr>
        )
    }
}
export default notification;