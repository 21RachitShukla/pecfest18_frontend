import React, { Component } from 'react'
import './index.css'

class registeredEvents extends Component {
    render(){
        return(
            <tr>
                <td>{this.props.event}</td>
                <td>{this.props.date}</td>
                <td>{this.props.venue}</td>
                <td>{this.props.time}</td>
                //<td>{this.props.timeofreg}</td>
            </tr>
        )
    }
}
export default registeredEvents;