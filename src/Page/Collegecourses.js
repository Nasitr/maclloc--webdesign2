import React from "react";
import Navbars from "../component/Navbars";
import truecircle from "../images/truecircle.svg";
import dashboardreport from "../images/dashboardreport.jpg";
import macllocwhite from "../images/macllocwhite.svg";
import map from "../images/map.svg";
import mails from "../images/mails.svg";
import calling from "../images/calling.svg";
import person from "../images/person.svg";
import bca from "../images/bca.svg";
import bs from "../images/bs.svg";
import bc from "../images/bc.svg";
import girlscombo from "../images/girlscombo.png";
import search_one from "../images/search_one.svg";
import { NavLink } from "react-router-dom";
import Modalscollege from "../modal/Modalscollege";
import Modalscollegeone from "../modal/Modalscollegeone";

function Collegecourses() {
  return (
    <>
      <Navbars />

      {/* Boost Up Your Skill Section  */}
      <div className="girlssection">
        <div className="girls_in_sec">
          <div className="bestway">
            <p>
              The Best Way For{" "}
              <span style={{ color: "#A74838" }}>Your Learning</span>
            </p>
            <h1>
              Boost up your skills with a{" "}
              <span style={{ color: "#A74838" }}>new way of learning. </span>{" "}
            </h1>
            <div className="searc_handlesec">
              <div className="searchsec">
                <div className="se_co">
                  <img src={search_one} alt="" style={{ cursor: "pointer" }} />
                  &nbsp;
                  <span>Search Your course</span>
                </div>
                <div className="carf">
                  <span>Categories</span>
                </div>
                <div className="carf">
                  <span>Diploma</span>
                </div>
                <div className="setsearchbtn carf">
                  <NavLink to="/#" className="searchbtn">
                    Search
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="girlscomboimg">
            <img src={girlscombo} alt="" />
          </div>
        </div>
      </div>

      {/* About Maclloc Collage Section */}
      <div className="institute ins">
        <div className="institute-divs isti">
          <div className="dash_imgs_one">
            <img src={person} alt="" />
          </div>
          <div className="insti ab">
            <h1>
              About Maclloc <span className="tec">College </span>
            </h1>
            <div className="insti_para">
              <span>
                We are providing regular college courses education for best in
                industry and quality education with certificates from UGC/AICTE
                approved universities. Creative college of computer application
                is giving knowledge in theory and as well as practical knowledge
                which is currently upgraded in real industries.
              </span>
            </div>
            <div>
              <Modalscollege />
            </div>

            <div className="boxsetd">
              <div className="boxsetin_sec">
                <div className="bcasetimg">
                  <img src={bca} alt="" />
                </div>
                <div className="bca_p">
                  <span>( Bachelors in Computer Application )</span>
                </div>
              </div>
              <div className="boxsetin_sec">
                <div className="bcasetimg bsimg">
                  <img src={bs} alt="" />
                </div>
                <div className="bca_p">
                  <span>( Bachelor of Science )</span>
                </div>
              </div>
              <div className="boxsetin_sec">
                <div className="bcasetimg bcimg">
                  <img src={bc} alt="" />
                </div>
                <div className="bca_p">
                  <span>( Bachelor of Commerce )</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Under Graduate Cources Section */}
      <div className="instituteaones_sec">
        <div className="institute-div insds" style={{ margin: "95px 0" }}>
          <div className="insti">
            <h1>
              Under <span className="tec">Graduate </span>Courses
            </h1>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>BCA ( Bachelors in Computer Application )</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>B.Sc ( Bachelor of Science )</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>
                B.Sc IT ( Bachelor of Science in Information Technology )
              </span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>BBA ( Bachelor of Business Administration )</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>B.Com ( Bachelor of Commerce )</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>BA ( Bachelor Arts )</span>
            </div>
          </div>
          <div className="dash_img dashreport_img">
            <img src={dashboardreport} alt="" />
          </div>
        </div>

        {/* Computer IT Section */}
        <div className="courses_skill">
          <div className="setflex_skill nine csn">
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
              <Modalscollegeone />
            </div>
          </div>
        </div>
      </div>

      {/* footer Section */}
      <div className="footer footbs footcsn">
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

export default Collegecourses;
