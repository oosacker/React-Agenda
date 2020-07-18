import React, { Component } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBIcon} from "mdbreact";

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

                <MDBIcon 
                  icon="trash"  
                  className="float-right red-text pr-3 del-button ml-3"
                  onClick={() => this.props.onDelete(this.props.id)}
                />

                <h6 className="mt-0 font-weight-bold">
                  {this.props.title} 
                </h6>{" "}

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
    export default Event;