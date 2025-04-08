import React, { useState } from "react";
import Navbars from "../component/Navbars";
import macllocwhite from "../images/macllocwhite.svg";
import map from "../images/map.svg";
import mails from "../images/mails.svg";
import calling from "../images/calling.svg";
import phone from "../images/phone.svg";
import email from "../images/email.svg";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modals from "../modal/Modals";

function Contactus() {
  // Inquiry Form Api Call
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    course_name: "",
    course_type: "",
  });

  const [formErrors, setFormErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    course_name: "",
    course_type: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/inquiry-form/", formData);

      setFormData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        course_name: "",
        course_type: "",
      });

      toast.success("Form submitted successfully!");
    } catch (error) {
      if (error.response && error.response.data) {
        setFormErrors(error.response.data);
        toast.error("Form has validation errors. Please check the fields.");
      }
    }
  };

  return (
    <>
      <Navbars />

      {/* Contact Us Section */}
      <div className="abo_coms">
        <div className="aboutour_coms_one">
          <div className="abo_com abo_coms_one">
            <h1>Contact Us</h1>
            <div className="contacts_btn_cont">
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "#A74838" }}
              >
                Home
              </NavLink>
              &nbsp;
              <NavLink
                to="/contactus"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                / Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Get In Touch Section */}
      <div className="formsec">
        <div className="form_insec">
          <div className="mapaside">
            <div className="gets">
              <h1>
                Get In <span style={{ color: "#A74838" }}>Touch</span>
              </h1>
              <p>
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>

              <form onSubmit={handleSubmit} className="formdata">
                <div className="formcombo">
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="inpts"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.fname}</div>
                </div>

                <div className="formcombo">
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="inpts"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.lname}</div>
                </div>

                <div className="formcombo">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="inpts"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.email}</div>
                </div>

                <div className="formcombo">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="inpts"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.phone}</div>
                </div>

                <div className="formcombo">
                  <input
                    type="text"
                    name="course_name"
                    value={formData.course_name}
                    onChange={handleChange}
                    placeholder="Career name"
                    className="inpts"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.course_name}</div>
                </div>

                <div className="formcombo">
                  <input
                    type="text"
                    name="course_type"
                    value={formData.course_type}
                    onChange={handleChange}
                    placeholder="Career courses"
                    className="inpts"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.course_type}</div>
                </div>

                <div>
                  <button type="submit" className="subbtn_set subn">
                    Submit Now
                  </button>
                </div>
              </form>
              <ToastContainer />

              <div className="combotwo">
                <div className="twosec">
                  <div className="phoneimg">
                    <img src={phone} alt="" />
                  </div>
                  <span className="pho">+91 75748 43784 | +91 70968 43784</span>
                </div>
                <div className="twosec">
                  <div className="phoneimg">
                    <img src={email} alt="" />
                  </div>
                  <span className="phos">Info.macllocinstitute@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ifset">
            <div className="map_setback">
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7437.509281704395!2d72.887618!3d21.241576!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1d1570180b%3A0xd7592ea995e3af5b!2sMaclloc%20Design%20And%20Multimedia%20Institute!5e0!3m2!1sen!2sin!4v1703322789893!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Computer IT Section */}
        <div className="courses_skill">
          <div className="setflex_skill nine">
            <div className="set_combo_skill">
              <div className="our_skill ">
                <h1>
                  Computer IT is no longer a skill but a necessity,
                  <br /> so{" "}
                  <span style={{ color: "#a74838" }}>
                    join Maclloc Institute today...
                  </span>
                </h1>
              </div>
            </div>
            <div className="addmission_section">
              <Modals />
            </div>
          </div>
        </div>
      </div>

      {/* footer Section */}
      <div className="footer footg">
        <div className="footerin">
          <div className="iconimgone">
            <div>
              <img src={macllocwhite} alt="" />
            </div>
            <p>
              Computer IT is no longer a skill but a necessity, so join Maclloc
              Institute today...
            </p>
          </div>
          <div className="allfoot_set">
            <div className="main_foot_handle">
              <div className="foot_co">
                <h1>Company</h1>
              </div>
              <div className="foots">
                <NavLink className="footer_fon" to={"/careercourse"}>
                  Careers
                </NavLink>
                <br />
                <NavLink className="footer_fon" to={"/about"}>
                  About Us
                </NavLink>
                <br />
                <NavLink className="footer_fon" to={"/#"}>
                  FAQs
                </NavLink>
                <br />
                <NavLink className="footer_fon" to={"/#"}>
                  Teams
                </NavLink>
                <br />
                <NavLink className="footer_fon" to={"/contactus"}>
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>

          <div className="allfoot_set">
            <div className="main_foot_handle">
              <div className="lastset">
                <div>
                  <img src={map} alt="" />
                </div>
                <p>
                  219, Raghuvir Shoppers, Near Lajamni Chowk, Mota Varachha,
                  Surat - 394101
                </p>
              </div>
              <div className="lastset">
                <div>
                  <img src={mails} alt="" />
                </div>
                <p>Info.macllocinstitute@gmail.com</p>
              </div>
              <div className="lastset">
                <div>
                  <img src={calling} alt="" />
                </div>
                <p>
                  +91 75748 43784 <br />
                  +91 70968 43784
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="last_footer_section">
        Copyright © 2023 Maclloc Design And Multimedia Institute. All Rights
        Reserved
      </div>
    </>
  );
}

export default Contactus;
