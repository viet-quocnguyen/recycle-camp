import React, { Component } from "react";
import { Link } from "react-router-dom";
import Camera from "react-html5-camera-photo";
import { Button, Container } from "react-bootstrap";
import "react-html5-camera-photo/build/css/index.css";
import "./CameraPage.css";

// Note: you do not need to import @tensorflow/tfjs here.

export default class CameraPage extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: null
    };
  }
  onTakePhoto(dataUri) {
    this.setState({
      imageUrl: dataUri
    });

    this.props.history.push({
      pathname: "/result",
      data: { imageUrl: dataUri }
    });
  }

  onCameraError(error) {
    console.error("onCameraError", error);
  }

  onCameraStart(stream) {
    console.log("onCameraStart");
  }

  onCameraStop() {
    console.log("onCameraStop");
  }

  render() {
    return (
      <Container>
        <div className="options">
          <Link to="/">
            <Button variant="secondary">Go Back</Button>
          </Link>
        </div>
        <h1 style={{ textAlign: "center", margin: "15px" }}>
          Please take a picture of your object
        </h1>
        <div id="cam" className="camera">
          <Camera
            onTakePhoto={dataUri => {
              this.onTakePhoto(dataUri);
            }}
          />
        </div>
      </Container>
    );
  }
}
