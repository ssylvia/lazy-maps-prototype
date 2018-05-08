import React from "react";

export class WebMapComponent extends React.Component {

  componentDidMount() {
    // pass up the container element for the scene view
    this.props.onload(this.mapDiv);
  }

  render() {
    return (
      <div className="webmap"
        ref={
          element => this.mapDiv = element
        }>
      </div>
    );
  }
}
