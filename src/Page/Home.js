import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import Navbars from "../component/Navbars";
import circlelayaer from "../images/circle_layer.svg";
import rightarrow from "../images/rightarrow.svg";
import setting from "../images/setting.svg";
import blacksetting from "../images/blacksetting.svg";
import stayamev from "../images/stayamev.svg";
import iso from "../images/iso.svg";
import nsdc from "../images/nsdc.svg";
import jobplacement from "../images/job_placement.svg";
import dashboardreport from "../images/dashboardreports.svg";
import truecircle from "../images/truecircle.svg";
import informationyechnology from "../images/informationyechnology.jpg";
import ie from "../images/ie.svg";
import cc from "../images/cc.svg";
import pa from "../images/pa.svg";
import sis from "../images/sis.svg";
import joc from "../images/joc.svg";
import is from "../images/is.svg";
import pan from "../images/pan.svg";
import lsc from "../images/lsc.svg";
import greencircle from "../images/greencircle.svg";
import yellowpollygone from "../images/yellowpollygone.svg";
import fivestar from "../images/fivestar.svg";
import macllocwhite from "../images/macllocwhite.svg";
import map from "../images/map.svg";
import mails from "../images/mails.svg";
import calling from "../images/calling.svg";
import pluslogo from "../images/pluslogo.png";
import fullstackdev from "../images/fullstackdev.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, NavLink } from "react-router-dom";
import Modalshome from "../modal/Modalshome";
import Modals from "../modal/Modals";

const SliderSection = ({ index, label, isActive, onClick, image }) => (
  <div
    className={`graphsec${index + 1} ${isActive ? "active" : ""}`}
    onClick={onClick}
  >
    <div className="grd">
      <div className="graphsecin">
        <img src={image} alt="" className="grim" />
        <span
          style={{ fontSize: "11px", fontWeight: "400", paddingLeft: "17px" }}
        >
          {label}
        </span>
      </div>
    </div>
  </div>
);

const facilities = [
  { img: ie, text: "Industry Expert Trainers" },
  { img: cc, text: "Career Counselling" },
  { img: pa, text: "100% Placement Assistance" },
  { img: sis, text: "Softskill Improvement Sessions" },
  { img: joc, text: "Job Oriented Courses" },
  { img: is, text: "Interview Support" },
  { img: pan, text: "Personalized Attention" },
  { img: lsc, text: "Lifetime Support Community" },
];

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

function Home() {
  const [sections, setSections] = useState([]);
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [logos, setLogos] = useState([]);
  const [images, setImages] = useState([]);
  const [sectionsone, setSectionsone] = useState([]);

  // Banner Images Api Call
  useEffect(() => {
    axios
      .get("api/banner-images")
      .then((response) => {
        const apiSections = response.data;
        setSections(apiSections);

        const apiImages = apiSections.map((section) => section.image);
        setImages(apiImages);
      })
      .catch((error) => {});
  }, []);

  // Recruitment Partners Api Call
  useEffect(() => {
    axios
      .get("api/recruitment-partners")
      .then((response) => {
        setLogos(response.data);
      })
      .catch((error) => {});
  }, []);

  // Student feeedback Api Call
  useEffect(() => {
    axios
      .get("/api/student-feedback/")
      .then((response) => {
        setTestimonialsData(response.data);
      })
      .catch((error) => {});
  }, []);

  const options = {
    item: 1,
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    nav: true,
    dots: false,
    margin: 25,
    responsive: {
      1900: {
        items: 2,
      },
      1600: {
        items: 2,
      },
      1400: {
        items: 2,
      },
      1100: {
        items: 2,
      },
      992: {
        items: 2,
      },
      335: {
        items: 1,
        innerWidth: "100%",
        outerWidth: "100%",
      },
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    axios
      .get("/api/overall-info/")
      .then((response) => {
        setSectionsone(response.data);
      })
      .catch((error) => {});
  }, []);

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
  const displayedCourses = courses.slice(0, 3);

  return (
    <>
      <Navbars />

    {/* Unlock Your Potential Section */}
<div className="mainhome">
  <div className="aside">
    <div className="asidein">
      <p className="macpra">
        Welcome To Maclloc Design & Multimedia institute
      </p>
      <h1 className="unlock">
        Unlock your potential <br />
        <span style={{ color: "#a74838" }}>empowering futures </span> <br />
        with IT Excellence
      </h1>
      <p className="unleash">
        Unleash Your Potential:{" "}
        <span style={{ fontWeight: "700" }}>
          Empowering Futures Through IT Excellence
        </span>
      </p>
      <Modalshome />
    </div>
    <div className="verti">
      <div className="vl"></div>
      <div className="yt" style={{ paddingTop: "20px" }}>
        YT
      </div>
      <br />
      <div className="yt">IG</div>
      <br />
      <div className="tw">TW</div>
      <br />
      <div className="yt">FB</div>
      <br />
      <div className="vl"></div>
    </div>
    <div className="job">
      <img src={jobplacement} alt="Job Placement" />
    </div>
  </div>

  {/* Static Slider with Two Images */}
  <div className="slider-container">
    <div className="slik">
      <div className="slider-images">
        <img
          src={fullstackdev}  // First image
          alt="static-slide-1"
          className="slidim"
        />
        
      </div>
    </div>

   
    

    {/* Static Slider Sections */}
    {sections.map((section, index) => (
      <SliderSection
        key={index}
        index={index}
        label={section.name}
        isActive={index === 0}  // Only the first section will be active
        onClick={() => {}}
        image={section.image}
      />
    ))}
  </div>
</div>


      {/* Job Placement Section */}
      <div className="middle">
        <div className="">
         
        </div>
      </div>

      {/* Elevate Your IT Skills Section */}
      <div className="elevate">
        <div className="ele_g">
          <div className="eleones">
            <img src={circlelayaer} alt="" className="circlelayout" />
            <h1 className="itskill">Elevate Your IT Skills</h1>
            <p className="empower">
              Empower yourself with industry-leading training from seasoned
              experts.
            </p>
          </div>
          <div className="eleonesa">
            <img src={circlelayaer} alt="" className="circlelayout" />
            <h1 className="itskill">Stay Ahead with Cutting-Edge Tech</h1>
            <p className="empower">
              Unlock your potential with courses that align with the latest
              global tech trends.
            </p>
          </div>
          <div className="eleone">
            <img src={circlelayaer} alt="" className="circlelayout" />
            <h1 className="itskill">
              Your IT Journey, Our Lifelong Commitment
            </h1>
            <p className="empower">
              Experience unmatched support as you embark on a lifetime of
              learning and growth with us.
            </p>
          </div>
        </div>
      </div>

      {/* Our Courses section */}
      {/* <div className="courses">
        <div className="setflex">
          <div className="set_combo">
            <div className="setimgesone">
              <img src={setting} alt="" />
            </div>
            <div>
              <h1 className="our">Our Courses</h1>
              <p className="efficient">
                Empowering students with efficient software courses for swift{" "}
                learning and promising career prospects.
              </p>
            </div>
          </div>
          <div className="viewbutton">
            <button type="button" className="views">
              View More Courses
            </button>
          </div>
        </div>
      </div> */}

      {/* Card Section */}
      <div className="cards">
        <div className="threecards thcar">
          {displayedCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onClick={() => handleCourseClick(course.id)}
            />
          ))}
        </div>
      </div>

      {/* Recognition Section */}
      <div className="cours_div">
        <div className="sub_cour-div">
          <div className="cour_img-div">
            <img src={blacksetting} />
          </div>
          <div>
            <div style={{ width: "100%" }}>
              <h1 className="ours">Recognition</h1>
              <p className="efficients">
                Maclloc Institute is known to be associated with many
                prestigious bodies. Having been recognized by many governmental
                bodies, here are all the prestigious associations and
                certificates that have been bestowed upon us.
              </p>
            </div>
            <div className="card_three_sec">
              <div className="card_set cseh">
                <img src={stayamev} alt="" className="stisp" />
              </div>
              <div className="card_set cseh">
                <img src={iso} alt="" className="stisp" />
              </div>
              <div className="card_set cseh">
                <img src={nsdc} alt="" className="stisp" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Maclloc Institute Section*/}
      <div className="institute">
        <div className="institute-div">
          <div className="insti">
            <h1>Why Maclloc Institute?</h1>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>Free Demo Sessions</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>100% Job Placement (Unlimited Interview Calls)</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>100% Live Project Work</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>
                Special Focus on Personality Development & Soft Skills
              </span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>Interview Preparation & Mock Interviews</span>
            </div>
            <div className="insti_para">
              <img src={truecircle} alt="" />
              <span>Get Internship Letter</span>
            </div>
          </div>
          <div className="dash_img">
            <img src={dashboardreport} alt="" />
          </div>
        </div>
      </div>

      {/* Why Information Technology Section*/}
      <div className="institute">
        <div className="institute-divs i_df">
          <div className="dash_imgs">
            <img src={informationyechnology} alt="" />
          </div>
          <div className="insti">
            <h1 style={{ marginTop: "19px" }}>
              Why Information <span className="tec">Technology</span>
            </h1>
            <div className="insti_para solve">
              <span>
                Welcome to our website, where we explore the exciting world of
                Information Technology (IT) and its profound impact on our
                lives. In this digital age, IT has become an essential and
                pervasive force, revolutionizing the way we live, work,
                communicate, and solve problems.{" "}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Maclloc Institute Facilities Section */}
      <div className="facility">
        <h1>Maclloc Institute Facilities</h1>
        <div className="facilityin">
          {facilities.map((facility, index) => (
            <div key={index}>
              <div className="icoi">
                <div className="iconimg">
                  <img src={facility.img} alt="" />
                </div>
              </div>
              <div className="studenttone">
                {facility.text.split("<br />").map((line, lineIndex) => (
                  <React.Fragment key={lineIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

     


      {/* footer Section */}
      <div className="footer">
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

export default Home;
