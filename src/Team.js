import React, {Component} from 'react';
import {Motion, spring} from 'react-motion';
import Loader from './Loader';
// import SvgCircle from './SvgCircle';
import './Team.css';
import './Team.css';

export default class Team extends Component {

  componentDidMount() {

    var em = document.getElementsByClassName("email");
    var phone = document.getElementsByClassName("phone");
    for (var i of em) {
      var txt = i.innerHTML;
      i.innerHTML = "<a href='mailto:" + txt + "' title='" + txt + "'>" + txt + "</a>";
      // console.log(i.innerHTML);
    }
    for (var i of phone) {
      var txt = i.innerHTML;
      i.innerHTML = "<a href='tel:+91" + txt + "' title='+91-" + txt + "'>+91-" + txt + "</a>";
    }

    this.restore = document.body.style.overflow;
    document.body.style.overflow = 'auto';

  }

  componentWillUnmount() {
    document.body.style.overflow = this.restore;

  }

  render() {
    return (
      <div className="container-fluid" id="parent_">
        <div className="Team-header">
          <h1>Team</h1>
        </div>
        <div className="row heading">
          <div className="col">
            <div className="designation">Convener</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Akhilesh Sharma</div>
                  <div className="email">akhilesh.sharma@pecfest.in</div>
                  <div className="phone">9888696867</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Co-Convener</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Harsh Sharma</div>
                  <div className="email">harsh@pecfest.in</div>
                  <div className="phone">9878235871</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row heading">
          <div className="col">
            <div className="designation">Secretaries</div>
            <div className="row">
              <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
                <div className="card_inner">
                  <div className="pad"></div>
                  <div className="card_content_top"></div>
                  <div className="card_content_bottom">
                    <div className="name">Mayank Goyal</div>
                    <div className="email">mayank@pecfest.in</div>
                    <div className="phone">9465242818</div>
                  </div>
                </div>
              </div>
              <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
                <div className="card_inner">
                  <div className="pad"></div>
                  <div className="card_content_top"></div>
                  <div className="card_content_bottom">
                    <div className="name">Shivam Thakur</div>
                    <div className="email">shivam.pecfest@gmail.com</div>
                    <div className="phone">9471091084</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
                <div className="card_inner">
                  <div className="pad"></div>
                  <div className="card_content_top"></div>
                  <div className="card_content_bottom">
                    <div className="name">Shubham Garg</div>
                    <div className="email">shubham@pecfest.in</div>
                    <div className="phone">9501157818</div>
                  </div>
                </div>
              </div>
              <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
                <div className="card_inner">
                  <div className="pad"></div>
                  <div className="card_content_top"></div>
                  <div className="card_content_bottom">
                    <div className="name">Isha Singla</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Marketing (Branding and Sponsorship)</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Aseem Baveja</div>
                  <div className="email">aseem@pecfest.in</div>
                  <div className="phone">9988081481</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Ananya Singh Chaudhary</div>
                  <div className="email">asc2226@columbia.edu</div>
                  <div className="phone">8558819215</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Infrastructure</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Devansh Kandpal</div>
                  <div className="email">devansh.kandpal@gmail.com</div>
                  <div className="phone">9592029283</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Shubhanshu Sharma</div>
                  <div className="email">shubhanshu.pec@gmail.com</div>
                  <div className="phone">9780994223</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Event Coordination (Technical)</div>
          </div>
        </div>
        <div className="row">
          <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
            <div className="card_inner">
              <div className="pad"></div>
              <div className="card_content_top"></div>
              <div className="card_content_bottom">
                <div className="name">Vaibhav Dwivedi</div>
              </div>
            </div>
          </div>
          <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
            <div className="card_inner">
              <div className="pad"></div>
              <div className="card_content_top"></div>
              <div className="card_content_bottom">
                <div className="name">Shyam Pandya</div>
                <div className="email">shyampandya97@gmail.com</div>
                <div className="phone"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Event Coordination (Cultural)</div>
          </div>
        </div>
        <div className="row">
          <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
            <div className="card_inner">
              <div className="pad"></div>
              <div className="card_content_top"></div>
              <div className="card_content_bottom">
                <div className="name">Shiman Vashisth</div>
                <div className="email">shiman@pecfest.in</div>
                <div className="phone">9915749135</div>
              </div>
            </div>
          </div>
          <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
            <div className="card_inner">
              <div className="pad"></div>
              <div className="card_content_top"></div>
              <div className="card_content_bottom">
                <div className="name">Raghav Arora</div>
                <div className="email">raghavarora.beaero14@pec.edu.in</div>
                <div className="phone">8968222377</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Security and Discipline</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Himanish Khurana</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Gurjot Singh</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Alumni &amp; Industry Relations</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Snigdha Singh</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Printing, Publishing and Stationary</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Gautam Sharma</div>
                  <div className="email">printing@pecfest.in</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Mega Shows</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Ketan Sud</div>
                  <div className="email">ketan@pecfest.in</div>
                  <div className="phone">9876970913</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Finance</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Gobind Dhamija</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Logistics</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Aakanksha</div>
                  <div className="email">aakanksha.kh.pec@gmail.com</div>
                  <div className="phone">9501033030</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Hospitality</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Pratik Sinha</div>
                  <div className="email">pratikpecfest@gmail.com</div>
                  <div className="phone">8528858461</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Public Relations and Media</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Sanpreet</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="designation">Publicity (Offline and Branding)</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Vaibhav Sharma</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row heading">
          <div className="col">
            <div className="designation">Creative</div>
            <div className="Team-card" style={{backgroundImage: "url(/team/placeholder.jpg)"}}>
              <div className="card_inner">
                <div className="pad"></div>
                <div className="card_content_top"></div>
                <div className="card_content_bottom">
                  <div className="name">Mayank Kaura</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}