import React, {Component} from 'react';
import blank_img from './blank.png'
import './index.css';
import EventRegistrations from './registeredEvents'
import Notifications from "./notification";
import user from '../user';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.displayRegisteredEvents = this.displayRegisteredEvents.bind(this);
    this.displayNotifications = this.displayNotifications.bind(this);
    this.state = {registeredEvents: true, haveNotifs: false, data: null, loading: true};
    //this.getData();
  }

  componentDidMount() {
    user.getRegisteredEvents({
      onSuccess: events => {
        this.setState({events: events, registeredEvents: true});
      },
      onFailed: err => {
        this.setState({error: true});
      }
    }),

      user.getNotifications({
        onSuccess: notifs => {
          this.setState({notifs: notifs, haveNotifs: true});
        },
        onFailed: err => {
          this.setState({error: true});
        }
      }),

      user.getUser({
        onSuccess: (user) => {
          this.setState({user, loading: false});
        },
        onFailed: (err) => {
          if (err) {
            this.setState({message: err.message || 'Failed to login', showMessage: true})
          } else {
            this.setState({message: 'Failed to login', showMessage: true});
          }
        }
      });
  }

  getData() {
    let data = fetch('https://facebook.github.io/react-native/movies.json').then((resp) => {
      resp.json().then((res) => {
        //this.setState({data:})
      });
    })
  }

  displayRegisteredEvents() {
    this.setState({registeredEvents: true});
  }

  displayNotifications() {
    this.setState({registeredEvents: false});
  }

  render() {
    const user = !this.state.loading ? this.state.user : {"pecfestId": "NULL"};
    const registeredEvents = this.state.registeredEvents;
    const events = !this.state.loading && !this.state.error ? this.state.events : [];
    const notifs = this.state.haveNotifs ? this.state.notifs : [];
    let result;

    if (registeredEvents) {
      result = <div id="reg" className="registration_table">
        <table>
          <tr>
            <th>Event</th>
            <th>Date</th>
            <th>Venue</th>
            <th>Time</th>
          </tr>
          {
            events.map((event, i) => (
              <EventRegistrations
                key={i}
                event={event.name}
                date={event.date}
                venue={event.venue}
                time={event.time}
                timeofreg="8:40am"
              />
            ))
          }
        </table>
      </div>
    }
    else {
      result = <div id="notif" className="notification_table">
        <table>
        <tr>
          <th>Event</th>
          <th>Title Title Title Title Title Title Title Title Title Title Title Title Title TitleTitle Title Title Title Title Title Title Title Title Title Title Title Title Title </th> {/*for checking scroll property of table*/}
          <th>Details</th>
        </tr>
          {
            notifs.map((notif, i) => (
              <Notifications
                key={i}
                event={notif.eventName}
                notificationTitle={notif.notificationTitle}
                notificationDetails={notif.notificationDetails}
              />
            ))
          }
        </table>
      </div>
    }

    return (
      <div id="main-div" className="flex-container">
        
        <div className="flex_left">

          {/*buttons*/}
          <div id="buttons-id" className="buttons">
            <div className="button_internal" onClick={this.displayRegisteredEvents}
                 ontouchstart={this.displayRegisteredEvents}><a href="#"><h2>Registered Events</h2></a>
            </div>
            <div className="button_internal" onClick={this.displayNotifications}
                 ontouchstart={this.displayNotifications}><a href="#"><h2>Notifications</h2></a>
            </div>
          </div>
        
          {/*Result*/}
          {result}

        </div>


        <div className="flex_right">
          <div>
            {/*<h1>PECFEST 2018</h1>*/}
            <img src={blank_img} alt="User Avatar"/>

            <h2>{user.pecfestId}</h2>
          </div>
          <div>
            <hr style={{borderTop: '3px solid'}}/>
            <p>Participant, Pecfest 2018</p>
            
            {/*<div className="grid-container-card">
                              <div className="grid-item">
                                  <div className="card">
                                      <div className="container">
                                          <h4><b>12</b></h4>
                                          Events Participated
                                      </div>
                                  </div>
                              </div>

                              <div className="grid-item">
                                  <div className="card">
                                      <div className="container">
                                          <h4><b>10</b></h4>
                                          Events Won
                                      </div>
                                  </div>
                              </div>
              </div>*/}
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;