import React, { useEffect, useState } from "react";
import Navbars from "../component/Navbars";
import teams from "../images/teams.png";
import founder from "../images/founder.jpg";
import chief from "../images/chief.jpg";
import link from "../images/link.svg";
import macllocwhite from "../images/macllocwhite.svg";
import map from "../images/map.svg";
import mails from "../images/mails.svg";
import calling from "../images/calling.svg";
import { NavLink } from "react-router-dom";
import Modals from "../modal/Modals";
import axios from "axios";


function About() {
  // teamMembers Api Call
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    axios
      .get("/api/team-members/")
      .then((response) => {
        setTeamMembers(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <Navbars />

      {/* About Our Company Section*/}
      <div className="abo_coms">
        <div className="aboutour_com">
          <div className="abo_com abo_coms_one">
            <h1>About Our Company</h1>
            <p>Maclloc design and multimedia institute</p>
            <div className="contacts_btn">
              <NavLink
                to="/contactus"
                className="contact"
                style={{ textDecoration: "none" }}
              >
                Contact us
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Mission Section */}
      <div className="vision_mission">
        <div className="viss_miss">
          <h1>
            Our Vision <span className="tecs">Mission</span>
          </h1>
          <p>
            Our vision is to be a premier institute for Information Technology
            education, empowering individuals with the knowledge, skills, and
            mindset to excel in the dynamic IT industry. We envision a future
            where our graduates become leaders and change-makers, driving
            innovation and making a positive impact in the digital world. Our
            mission is to provide high-quality IT education and training that
            meets industry standards and prepares our students for successful
            careers.
          </p>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="institutein">
        <div className="institute-divs-one">
          <div className="dash_imgsones">
            <img src={teams} alt="" />
          </div>
          <div className="insti abs">
            <h1>What We Do?</h1>
            <div className="insti_paras">
              <span>
                At our IT institute, we offer a comprehensive range of programs,
                resources, and services designed to empower students with the
                knowledge and skills needed to succeed in the field of
                Information Technology. Our programs are designed to equip
                students with both theoretical knowledge and practical skills
                through hands-on projects and real-world simulations.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Meet The CEO Of Our Company Section */}
      <div className="meetceo">
        <div className="meetceo_sec">
          <h1>
            Meet The <span style={{ color: "#a74838" }}>CEO</span> Of Our
            Company
          </h1>
          <div className="d-flex justify-content-center w-100">
            <p>
              Our Team Comprises Highly Skilled Individuals Who Are Passionate
              About Their-Work And Committed To Delivering Excellence.
            </p>
          </div>
        </div>

        <div className="foundersec">
          <div className="found">
            <div className="fonder_one">
              <img src={founder} alt="" />
            </div>
            <div className="combinefound">
              <h1>Rutvik Radadiya</h1>
              <span>Founder</span>
            </div>
          </div>

          <div className="found">
            <div className="fonder_one">
              <img src={chief} alt="" />
            </div>
            <div className="combinefound">
              <h1>Smit Donda</h1>
              <span>Chief executive officer</span>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Great Team Section
      <div
        className="meetceo_sec-section"
        style={{ margin: "-45px 0px 9px 0;" }}
      >
        <div>
          <h1 className="meet_h">
            Meet Our <span style={{ color: "#a74838" }}> Great </span>Team
          </h1>
        </div>
        <div className="sevenmeet">
          {teamMembers.map((member) => (
            <div key={member.id} className="sevengroup">
              <div style={{ width: "100%" }}>
                <img src={member.image} alt="" style={{ width: "100%" }} />
              </div>
              <div className="olivia">
                <h1>{member.name}</h1>
                <div style={{ display: "flex" }}>
                  <img src={link} alt="" />
                  <span className="haust">{member.designation}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Computer IT Section */}
        {/* <div className="courses_skill sfn">
          <div className="setflex_skill nine">
            <div className="set_combo_skill">
              <div className="our_skill ">
                <h1>
                  Computer IT is no longer a skill but a necessity,
                  <br />
                  <span className="soj">
                    so{" "}
                    <span style={{ color: "#a74838" }}>
                      join Maclloc Institute today...
                    </span>
                  </span>
                </h1>
              </div>
            </div>
            <div className="addmission_section">
              <Modals />
            </div>
          </div>
        </div>
      </div> */} 

      {/* footer Section */}
      <div className="footer footsd">
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

export default About;
