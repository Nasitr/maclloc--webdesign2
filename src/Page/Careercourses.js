import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbars from "../component/Navbars";
import { Link, NavLink } from "react-router-dom";
import rightarrow from "../images/rightarrow.svg";
import macllocwhite from "../images/macllocwhite.svg";
import map from "../images/map.svg";
import mails from "../images/mails.svg";
import calling from "../images/calling.svg";
import Modals from "../modal/Modals";

const CourseCard = ({ course }) => {
  return (
    <div className="first_card card">
      <div className="first_card_img">
        <img src={course.card_img} alt="" />
      </div>

      <div className="blo_co">
        <h1 className="blocks">{course.name}</h1>
        <h1 className="courcesone">Course Duration: {course.duration} month</h1>
      </div>

      <Link to={`/careercourse/${course.id}`} className="btn-primarys">
        Read More
        <img src={rightarrow} alt="" style={{ paddingLeft: "10px" }} />
      </Link>
    </div>
  );
};

function Careercourses() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get("/api/course");
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  const handleCourseClick = (id) => {
    const selectedCourse = courses.find((course) => course.id === id);
    if (selectedCourse) {
      window.open(`/careercourse?id=${selectedCourse.id}`, "_self");
    }
  };

  return (
    <>
      <Navbars />

      {/* Explore New Skills Section */}
      <div className="abo_coms com_set">
        <div className="aboutour_com_career">
          <div className="abo_com abo_coms_one">
            <h1 className="ex">Explore new skills with maclloc</h1>
            <p className="un">
              Unlock New Horizons of Learning with Maclloc: Explore and Expand
              Your Skills!
            </p>
            <div className="contacts_btn">
              <Modals />
            </div>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="cards">
        <div className="threecards thcar">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course.id)}
            />
          ))}
        </div>

        {/* Computer IT Section */}
        <div className="courses_skill">
          <div className="setflex_skill nine killni">
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
      <div className="footer footb">
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

export default Careercourses;
