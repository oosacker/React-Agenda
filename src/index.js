import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBIcon, MDBBadge, MDBContainer, MDBRow, MDBCol} from "mdbreact";
import "./index.css";

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

    render() {
        return (
          <React.Fragment>
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
                  <h3 className="text-uppercase my-3">Schedule</h3>
                  <h6 className="my-3">
                    It's going to be busy day today. You have{" "}
                    <b>{this.state.events.length} events </b> today.
                  </h6>
                  <h1 className="my-3">
                    <MDBRow>
                        <MDBCol xs="3" className="text-center">
                          <MDBIcon icon="sun" fixed />
                        </MDBCol>
                        <MDBCol xs="9">Sunny</MDBCol>
                      </MDBRow>
                      <MDBRow>
                        <MDBCol xs="3" className="text-center">
                        <MDBIcon icon="thermometer-three-quarters" fixed />
                        </MDBCol>
                        <MDBCol xs="9">23°C</MDBCol>
                      </MDBRow>
                  </h1>
                  <p>
                    Don't forget your sunglasses. Today will be dry and sunny, becoming
                    warm in the afternoon with temperatures of between 20 and 25
                    degrees.
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </React.Fragment>
        );
      }
}

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
          time: this.props.time,
          title: this.props.title
        };
    }

    render() {
        return (
          <>
            <div className="media mt-1">

              <h3 className="h3-responsive font-weight-bold mr-3">
                {this.props.time}
              </h3>

              <div className="media-body mb-3 mb-lg-3">
                <MDBBadge color="danger" className="ml-2 float-right">
                    -
                </MDBBadge>
                <h6 className="mt-0 font-weight-bold">{this.props.title} </h6>{" "}
                <hr className="hr-bold my-2" />
                {this.props.location && (
                    <>
                        <p className="font-smaller mb-0">
                            <MDBIcon icon="location-arrow" /> {this.props.location}
                        </p>
                    </>
                )}
              </div>

            </div>

            {this.props.description && (
              <p className="p-2 mb-4 blue-grey lighten-5 blue-grey lighten-5">
                {this.props.description}
              </p>
            )}

          </>
        );
      }
    }

ReactDOM.render(<App />, document.getElementById("root"));