import React from "react";
import Navbars from "../component/Navbars";
import machineones from "../images/machineones.svg";
import machinetwos from "../images/machinetwos.svg";
import machinethrees from "../images/machinethres.svg";
import arrowup from "../images/arrowup.svg";
import macllocwhite from "../images/macllocwhite.svg";
import search_one from "../images/search_one.svg";
import map from "../images/map.svg";
import mails from "../images/mails.svg";
import calling from "../images/calling.svg";
import { NavLink } from "react-router-dom";
import Modals from "../modal/Modals";

function Blog() {
  const blogPosts = [
    {
      id: 1,
      image: machineones,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: 2,
      image: machinetwos,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    },
    {
      id: 3,
      image: machinethrees,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    },
    {
      id: 4,
      image: machineones,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: 5,
      image: machinetwos,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    },
    {
      id: 6,
      image: machinethrees,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    },
    {
      id: 7,
      image: machineones,
      category: "Design",
      title: "UX review presentations",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
    },
    {
      id: 8,
      image: machinetwos,
      category: "Product",
      title: "Migrating to Linear 101",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started.",
    },
    {
      id: 9,
      image: machinethrees,
      category: "Software Engineering",
      title: "Building your API Stack",
      description:
        "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.",
    },
  ];

  return (
    <>
      <Navbars />

      {/* Resources And Insights Section */}
      <div className="abo_coms">
        <div className="aboutour_com_blog">
          <div className="abo_com">
            <div className="learn_btn">
              <button type="button" className="buttons blogf">
                Our blog
              </button>
            </div>
            <h1>Resources and insights</h1>
            <p>
              The latest industry news, interviews, technologies, and resources.
            </p>

            <div className="searchhand">
              <div className="sear">
                <img src={search_one} alt="" className="se_im" />
                <input type="text" className="tx_Se" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Section */}
      <div className="allblog">
        <div className="blogcard">
          {blogPosts.map((post) => (
            <div className="blogone" key={post.id}>
              <div className="blogmachine">
                <img src={post.image} alt="" />
              </div>
              <div className="b_set">
                <span className="des">{post.category}</span>
                <div className="blogcom">
                  <span>{post.title}</span>
                  <img src={arrowup} alt="" />
                </div>
                <span className="hows">{post.description}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="learn_btn load_learn">
          <button type="button">Load More</button>
        </div>

        {/* Computer IT Section */}
        <div className="courses_skill">
          <div className="setflex_skill nine nis">
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
      <div className="footer footbd">
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

export default Blog;
