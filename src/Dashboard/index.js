import React, {Component} from 'react';
import blank_img from './blank.png'
import './index.css';
import './notification.css';
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
      <h1 className="headings">Registered Events</h1>
        {/* Api ke saath aisa chalega
          {
            events.map((event, i) => (
              <EventRegistrations
                key={i}
                _key={i}
                event={event.name}
                date={event.date}
                venue={event.venue}
                time={event.time}
                timeofreg="8:40am"
              />
            ))
          }
        */}

        {/*Abhi testing ke liye ye h */}
        <EventRegistrations _key={0}/>
        <EventRegistrations _key={1}/>
        <EventRegistrations _key={2}/>
        <EventRegistrations _key={3}/>
        <EventRegistrations _key={4}/>
        <EventRegistrations _key={5}/>
        <EventRegistrations _key={6}/>
        <EventRegistrations _key={7}/>
        <EventRegistrations _key={8}/>
        <EventRegistrations _key={9}/>
        <EventRegistrations _key={10}/>       
    </div>
    }
    else {
      result = <div id="notif" className="table-wrapper">
        <h1>Notifications</h1>
        <table className="fl-table">
        <thead>
        <tr>
          <th>Event</th>
          <th>Title</th>
          <th>Details</th>
        </tr>
        </thead>
        <tbody>
          {/* for apis 
            notifs.map((notif, i) => (
              <Notifications
                key={i}
                event={notif.eventName}
                notificationTitle={notif.notificationTitle}
                notificationDetails={notif.notificationDetails}
              />
            ))
          */}

        {/*For testing*/}
        <Notifications key ={0} />
        <Notifications key ={1} />
        <Notifications key ={2} />
        <Notifications key ={3} />
        <Notifications key ={4} />
        <Notifications key ={5} />
        <Notifications key ={6} />
        <Notifications key ={7} />
        <Notifications key ={8} />
        <Notifications key ={9} />
        <Notifications key ={10} />
        <Notifications key ={11} />
        <Notifications key ={12} />
        <Notifications key ={13} />
        <Notifications key ={14} />
        <Notifications key ={15} />
          </tbody>
        </table>
      </div>
    }

    return (
      <div id="main-div" className="flex-container">
        
        <div className="flex_right">
          <div className="user_information">
            {/*<h1>PECFEST 2018</h1>*/}
            <img src={blank_img} alt="User Avatar"/>

            <h2>{user.pecfestId}</h2>
          </div>

          <div className="user_information">
            <hr style={{borderTop: '3px solid'}}/>
            <p>Participant, Pecfest 2018</p>
          </div>
          <br/><br/>
          
          <ul className="buttons_list">
            <li className="button_internal reg" onClick={this.displayRegisteredEvents}
            ontouchstart={this.displayRegisteredEvents}>
              <a href="#">Registered Events</a>
            </li>
            <li className="button_internal notif" onClick={this.displayNotifications}
            ontouchstart={this.displayNotifications}>
              <a href="#">Notifications</a>
            </li>
          </ul>

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


        <div className="flex_left">

          {/*buttons*/}
          <div id="buttons-id" className="buttons">
          </div>
        
          <div className="result">{result}</div>

        </div>
    </div>


    );
  }
}

export default Dashboard;