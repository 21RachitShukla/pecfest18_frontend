import React, { Component } from 'react'
import './notification.css'

class notification extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.event}Event1</td>
                <td>{this.props.notificationTitle}Event started</td>
                <td>{this.props.notificationDetails}The event has started in the auditorium</td>
            </tr>
        )
    }
}
export default notification;