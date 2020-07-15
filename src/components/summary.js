import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBIcon, MDBRow, MDBCol} from "mdbreact";


class Summary extends Component {
  render() {
    return (
      <>
        <h3 className="text-uppercase my-3">Schedule</h3>

        <h6 className="my-3">
            It's going to be busy day today. You have{" "}
            <b>{this.props.events.length} events </b> today.
        </h6>

        <h1 className="my-3">
            <MDBRow>
                <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="sun orange-text" fixed />
                </MDBCol>

                <MDBCol xs="9">
                    Sunny
                </MDBCol>
            </MDBRow>

            <MDBRow>
                <MDBCol xs="3" className="text-center">
                    <MDBIcon icon="thermometer-three-quarters red-text" fixed />
                </MDBCol>
                <MDBCol xs="9">
                    23°C
                </MDBCol>
            </MDBRow>
        </h1>
        <p>
            Don't forget your sunglasses. Today will be dry and sunny, becoming
            warm in the afternoon with temperatures of between 20 and 25
            degrees.
        </p>
      </>
    );
  }
}

export default Summary;





