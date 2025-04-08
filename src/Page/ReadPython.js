import React, { useState, useEffect } from "react";
import "../App.css";
import Navbars from "../component/Navbars";
import truecircle from "../images/truecircle.svg";
import macllocwhite from "../images/macllocwhite.svg";
import map from "../images/map.svg";
import mails from "../images/mails.svg";
import calling from "../images/calling.svg";
import { NavLink, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Modals from "../modal/Modals";

function ReadPython() {
  // Inquiry Form Api Call
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    course_name: "",
  });

  const [formErrors, setFormErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    course_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/demo-session/", formData);

      setFormData({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        course_name: "",
      });

      toast.success("Form submitted successfully!");
    } catch (error) {
      if (error.response && error.response.data) {
        setFormErrors(error.response.data);
        toast.error("Form has validation errors. Please check the fields.");
      }
    }
  };

  // Read Python api
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    fetchCourseDetailsById(id)
      .then((courseData) => {
        setCourse(courseData);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [id]);
  

  const fetchCourseDetailsById = async (id) => {
    try {
      const response = await axios.get(`/api/course/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching course details:", error);
      throw error;
    }
  };

  

  return (
    <>
      <Navbars />

      {/* Python Training Section */}
      <div className="abo_coms">
        <div
          className="aboutour_com_pay"
          style={{
            backgroundImage: `url(${course ? course.banner_img : ""})`,
          }}
        >
          <div className="abo_com abo_coms_one">
            {course && (
              <>
                <h1 className="pas">{course.name} Training in Surat</h1>
              </>
            )}
            <div className="contacts_btn_cont">
              <NavLink to="/" style={{ textDecoration: "none", color: "#fff" }}>
                Home
              </NavLink>
              &nbsp;
              {course && (
                <>
                  <NavLink
                    to="/readpython"
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    / {course.name} Training in Surat
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* About Python Course Section */}
      <div className="abpytho">
        <div className="abpy_g">
          <div className="abs_pay">
            {course && (
              <>
                <h1 style={{ marginTop: "19px" }}>
                  About <span className="tec">{course.name} Course</span>
                </h1>
              </>
            )}
            {course && (
              <>
                <span className="int">{course.about}</span>
              </>
            )}
            <div className="twocard_pay">
              {course && (
                <>
                  <div className="cd_m">
                    <span className="cd_s">Course Duration</span>
                    <br />
                    <span className="mon">{course.duration} Months</span>
                  </div>
                  <div className="cd_m">
                    <span className="cd_s">Daily Time</span>
                    <br />
                    <span className="mon">{course.daily_time} Hours</span>
                  </div>
                </>
              )}
            </div>
            <div className="inxl">
              <h1>Included In This Course</h1>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span className="csf">100% job placement</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span className="csf">Rich Learning Content</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span className="csf">Taught by Experienced Prof</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span className="csf">Industry Oriented Projects</span>
            </div>
          </div>
          <div>
            <div className="formsda">
              <form onSubmit={handleSubmit} className="formdata formset">
                <div className="book_demo">
                  <h1>Book A Free Demo Session</h1>
                </div>
                <div className="formcombo">
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="inpts int_libe"
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
                    className="inpts int_libe"
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
                    className="inpts int_libe"
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
                    className="inpts int_libe"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.phone}</div>
                </div>
                <div className="formcombo">
                  <input
                    type="text"
                    name="course_name"
                    value={formData.course_name}
                    onChange={handleChange}
                    placeholder="Course Name"
                    className="inpts int_libe"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.course_name}</div>
                </div>
                <div className="readsubd">
                  <button type="submit" className="subbtn_set subn paysub">
                    Submit Now
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>

      {/* Advance Python Section */}
      <div className="institute">
        <div className="institute-divs i_df">
          {course && (
            <div className="dash_imgs das_im">
              <img src={course.content_img} alt="" />
            </div>
          )}

          <div className="insti">
            {course && (
              <>
                <h1 style={{ marginTop: "19px" }}>
                  Advance <span className="tec">{course.name}</span>
                </h1>
                <div className="insti_para insti_job">
                  <img src={truecircle} alt="" />
                  <span className="csf">{course.content}</span>
                </div>
                <br />
              </>
            )}
          </div>
        </div>

        <div className="apfull">
          <NavLink className="apfulbtn" to={"/"}>
            Apply Now For the Full Course
          </NavLink>
        </div>

        {/* Computer IT Section */}
        <div className="courses_skill">
          <div className="setflex_skill nine skt">
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
      <div className="footer footp">
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

export default ReadPython;
