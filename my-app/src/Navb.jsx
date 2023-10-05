import React, { useState } from "react";
import "./Navb.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBCollapse,
} from "mdb-react-ui-kit";

function Navb() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg">
      <MDBNavbar
        fixed="top"
        expand="lg"
        dark
        bgColor="black"
        style={{ height: "100px",opacity:'70%' }}
      >
        <MDBContainer fluid>
          <MDBNavbarBrand href="#">
            <img
              style={{
                height: "45px",
                width: "220px",
                marginLeft: "20px",
                marginTop: "-15px",
              }}
              src="https://www.keralatourism.org/images/kt/kerala-tourism-title.png?d=18122017"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowNav(!showNav)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNav}>
            <MDBNavbarNav style={{ marginLeft: "35px",marginTop:'-2rem' }}>
            <MDBNavbarLink className="txt" href="/">
                HOME
              </MDBNavbarLink>
              <MDBNavbarLink className="txt" href="/experiencekerala">
                EXPERIENCE KERALA
              </MDBNavbarLink>
              <MDBNavbarLink className="txt" href="/findmore">
                FIND MORE
              </MDBNavbarLink>
              <MDBNavbarLink className="txt" href="#">
                HELP
              </MDBNavbarLink>
              <MDBNavbarLink className="txt" href="#">
                ABOUT
              </MDBNavbarLink>
             
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Navb;
