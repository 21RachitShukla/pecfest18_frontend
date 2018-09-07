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
    this.state = {registeredEvents: false, haveNotifs: false, data: null, loading: true};
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
      result = <div id="reg" className="registeredEvents center">
        <div id="buttons-id" style={{paddingTop: "1em"}}>
          <div className="button button1 button_after" onClick={this.displayRegisteredEvents}
               ontouchstart={this.displayRegisteredEvents}><a href="#"><h2>Registered Events</h2></a>
          </div>
          <div className="button button2" onClick={this.displayNotifications} ontouchstart={this.displayNotifications}>
            <a href="#"><h2>Notifications</h2></a>
          </div>
        </div>
        <div className="header _after">
          <EventRegistrations
            header="True"
            event="Event"
            date="Day"
            venue="Venue"
            time="Time"
            timeofreg="Reg Time"
          />
        </div>
        <div className="notifs _after">
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
        </div>
      </div>
    }
    else {
      result = <div id="notif" className="notification-window center">
        <div id="buttons-id" style={{paddingTop: "1em"}}>
          <div className="button button1" onClick={this.displayRegisteredEvents}
               ontouchstart={this.displayRegisteredEvents}><a href="#"><h2>Registered Events</h2></a>
          </div>
          <div className="button button2 button_after" onClick={this.displayNotifications}
               ontouchstart={this.displayNotifications}><a href="#"><h2>Notifications</h2></a>
          </div>
        </div>
        {/*<h2 className="headings">NOTIFICATIONS</h2>*/}
        <div className="header _after">
          <Notifications
            event="Event"
            notificationTitle="Title"
            notificationDetails="Details"/>
        </div>
        <div className="notifs _after">
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
        </div>
      </div>
    }
    return (
      <div id="main-div">

        <div className="grid-container">
          <div className="grid-item left-side">
            {result}
          </div>


          <div className="grid-item right-side">
            <div className="center">
              {/*<h1>PECFEST 2018</h1>*/}
              <br/><br/><br/><br/><br/><br/><br/><br/><br/>
              {/*Comment : User Image*/}
              <img className="user-avatar"
                   src={blank_img} alt=""
              />

              <h2>{user.pecfestId}</h2>
            </div>
            <div className="remaining-info-user">
              <hr style={{borderTop: '3px solid'}}/>
              <p>Participant, Pecfest 2018</p>

              <br/><br/>
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
      </div>
    );
  }
}

export default Dashboard;