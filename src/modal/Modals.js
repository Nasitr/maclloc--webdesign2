import { useState } from "react";
import "../App.css";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Modals() {
  const [lgShow, setLgShow] = useState(false);

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

  const [collegeCoursesActive, setCollegeCoursesActive] = useState(false);
  const [careerCoursesActive, setCareerCoursesActive] = useState(true);

  const handleCollegeCoursesClick = () => {
    setCollegeCoursesActive(true);
    setCareerCoursesActive(false);
  };

  const handleCareerCoursesClick = () => {
    setCollegeCoursesActive(false);
    setCareerCoursesActive(true);
  };

  const activeStyle = {
    backgroundColor: "#a74838",
    color: "white",
    border: "none",
  };

  const defaultStyle = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <>
      <button
        className="views_skill_ones"
        style={{ textDecoration: "none" }}
        onClick={() => setLgShow(true)}
      >
        Admission Open
      </button>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div>
            <div className="comb_admin gets">
              <h1>
                Get In <span style={{ color: "#A74838" }}>Touch</span>
              </h1>
              <p>We’d love to hear from you. Please fill out this form.</p>
            </div>
            <div className="choosebtn">
              <NavLink
                to=""
                className="subbtn_sets"
                style={collegeCoursesActive ? activeStyle : defaultStyle}
                isActive={(match, location) => {
                  if (!match) {
                    return false;
                  }
                  return location.pathname === "/admissioncollagecource";
                }}
                onClick={handleCollegeCoursesClick}
              >
                College Courses
              </NavLink>

              <NavLink
                to=""
                className="subbtn_sets"
                style={careerCoursesActive ? activeStyle : defaultStyle}
                isActive={(match, location) => {
                  if (!match) {
                    return false;
                  }
                  return location.pathname === "/admissioncareercourse";
                }}
                onClick={handleCareerCoursesClick}
              >
                Career Courses
              </NavLink>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="formdatas">
              <div className="formcmb">
                <div className="formcombo fistinput">
                  <label>First name</label>
                  <input
                    type="text"
                    name="fname"
                    value={formData.fname}
                    onChange={handleChange}
                    placeholder="First name"
                    className="inptsgrop"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.fname}</div>
                </div>
                <div className="formcombo fistinput">
                  <label>Last name</label>
                  <input
                    type="text"
                    name="lname"
                    value={formData.lname}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="inptsgrop"
                  />
                  <div className="errors" style={{ color: "red" }}>{formErrors.fname}</div>
                </div>
              </div>

              <div className="formcombo">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="inptsgrop"
                />
                <div className="errors" style={{ color: "red" }}>{formErrors.email}</div>
              </div>

              <div className="formcombo">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="inptsgrop"
                />
                <div className="errors" style={{ color: "red" }}>{formErrors.phone}</div>
              </div>

              <div className="formcombo">
                <label>Course name</label>
                <input
                  type="text"
                  name="course_name"
                  value={formData.course_name}
                  onChange={handleChange}
                  placeholder="Course name"
                  className="inptsgrop"
                />
                <div className="errors" style={{ color: "red" }}>{formErrors.course_name}</div>
              </div>

              <div className="formcombo">
                <label>Career courses</label>
                <input
                  type="text"
                  name="course_type"
                  value={formData.course_type}
                  onChange={handleChange}
                  placeholder="Career courses"
                  className="inptsgrop"
                />
                <div className="errors" style={{ color: "red" }}>{formErrors.course_type}</div>
              </div>

              <div className="submitbutton">
                <button type="submit" className="subbtn_set">
                  Submit Now
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;
