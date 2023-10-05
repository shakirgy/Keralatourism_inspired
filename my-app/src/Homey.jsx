import React from "react";
import Experiencekerala from "./Experiencekerala";
import "./Homey.css";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import FindMore from "./FindMore";
import Bottombar from "./Bottombar";

function Homey() {
  return (
    <div>
      <div>
        <div style={{ backgroundColor: "white" }}>
          <MDBCarousel showIndicators showControls fade>
            <MDBCarouselItem
              style={{ height: "462px" }}
              className="w-100 d-block"
              itemId={1}
              src="https://www.keralatourism.org/images/banner/medium_desktop/destination-wedding-1920x6502.jpg"
              alt="..."
            ></MDBCarouselItem>

            <MDBCarouselItem
              style={{ height: "462px" }}
              className="w-100 d-block"
              itemId={2}
              src="	https://www.keralatourism.org/images/banner/medium_desktop/malabar_river_festival-1920x650.jpg"
              alt="..."
            ></MDBCarouselItem>

            <MDBCarouselItem
              style={{ height: "462px" }}
              className="w-100 d-block"
              itemId={3}
              src="https://www.keralatourism.org/images/banner/medium_desktop/aralam-1920x6501.jpg"
              alt="..."
            ></MDBCarouselItem>

            <MDBCarouselItem
              style={{ height: "462px" }}
              className="w-100 d-block"
              itemId={4}
              src="https://www.keralatourism.org/images/banner/medium_desktop/icpc-1920.jpg"
              alt="..."
            ></MDBCarouselItem>
          </MDBCarousel>

          <br />
          <div
            style={{
              marginTop: "-6.5rem",
            }}
          >
            <Experiencekerala />
          </div>

          <br />

          <div>
            <FindMore />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homey;
