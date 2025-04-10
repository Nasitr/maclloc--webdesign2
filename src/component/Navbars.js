import React from "react";
import "../App.css";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import message from "../images/message.svg";
import notification from "../images/notification.svg";
import maclloc from "../images/maclloc.svg";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function Navbars() {
  return (
    <>

    {/* Navbar Section */}
      <div className="mainnav">
        <div className="maininnav">
          <div className="mainnav_hand">
            <div className="phoneimg">
              <img src={phone} alt="phone" className="" />
            </div>
            <span className="contact_p">+91 75748 43784 | +91 70968 43784</span>
          </div>
          <div className="mainnav_hand">
            <div className="phoneimgs">
              <img src={email} alt="phone" className="" />
            </div>
            <span className="contact_p">Info.macllocinstitute@gmail.com</span>
          </div>
          <div className="lastsec">
            <span className="messageone">
              <img src={message} alt="message" />
            </span>
            <span className="notificationsec">
              <img src={notification} alt="notification" />
              <span className="fives">5</span>
            </span>
          </div>
        </div>
      </div>

      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3 Nav">
          <Container fluid>
            <Navbar.Brand href="/">
              <div>
                <img src={maclloc} alt="" />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                ></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3" id="jc">
                  <NavLink to="/" className="pagelinks">
                    Home
                  </NavLink>
                  {/* <NavLink to="/careercourse" className="pagelinks">
                    Career Courses
                  </NavLink> */}
                  <NavLink to="/collegecourses" className="pagelinks">
                    College Courses
                  </NavLink>
                  <NavLink to="/blog" className="pagelinks">
                    Blog
                  </NavLink>
                  <NavLink to="/about" className="pagelinks">
                    About
                  </NavLink>
                  <NavLink to="/contactus" className="pagelinks contact cus">
                    Contact us
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbars;
