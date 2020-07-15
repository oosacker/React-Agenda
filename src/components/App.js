import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import Event from './event';
import Summary from './summary';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        events: [
            {
                id: 0,
                time: "10:00",
                title: "Breakfast with Simon",
                location: "Lounge Caffe",
                description: "Discuss Q3 targets"
            },
            {
                id: 1,
                time: "10:30",
                title: "Daily Standup Meeting (recurring)",
                location: "Warsaw Spire Office",
                
            },
            { 
                id: 2, 
                time: "11:00", 
                title: "Call with HRs",
                description: "Project meeting"
            },
            {
                id: 3,
                time: "11:00",
                title: "Lunch with Timothy",
                location: "Canteen",
                description: "Project evaluation"
            }
        ]
      }
    };

  handleDelete = eventId => {
    const events = this.state.events.filter(e => e.id !== eventId);
    this.setState({ events });
  };

  render() {
    return (
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol md="9" className="mb-r">
              <h2 className="text-uppercase my-3">Today:</h2>

              <div id="schedule-items">
                {this.state.events.map(event => (
                  <Event
                    key={event.id}
                    id={event.id}
                    time={event.time}
                    title={event.title}
                    location={event.location}
                    description={event.description}
                    onDelete={this.handleDelete}
                  />
                ))}
              </div>
              
              <MDBRow className="mb-4">
                <MDBCol xl="3" md="6" className="mx-auto text-center">
                  <MDBBtn color="info" rounded>
                    Add Event
                  </MDBBtn>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="3">
                  <Summary events={this.state.events} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    );
  }
}

export default App;