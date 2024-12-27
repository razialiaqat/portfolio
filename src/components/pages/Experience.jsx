import React from "react";
import Project1 from "../../assets/html.png";
import Project2 from "../../assets/css.png";
import Project3 from "../../assets/javascript.png";
import Project4 from "../../assets/bootstrap.png";
import Project5 from "../../assets/php.png";
import Project7 from "../../assets/database.png";

const Experience = () => {
  return (
    <section className="experience">
      <div id="projects">
        <h2 className="experiencetitle">MY Portfolio</h2>
        <span className="experienceDesc">
          Extensive experience in developing responsive and visually appealing web applications using
          HTML, CSS, and JavaScript. Proficient in modern frameworks like React and tools such as Git for version control. 
          Skilled in API integration and optimizing user interfaces for performance and accessibility. 
          Adept at collaborating with teams to deliver seamless, user-friendly digital experiences.
        </span>
        <div className="experienceImg">
          <div className="card">
            <div className="card-body">
              <img src={Project1} alt="HTML Project" className="experienceImg" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Project2} alt="CSS Project" className="experienceImg" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Project3} alt="JavaScript Project" className="experienceImg" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Project4} alt="Bootstrap Project" className="experienceImg" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Project5} alt="PHP Project" className="experienceImg" />
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <img src={Project7} alt="Database Project" className="experienceImg" />
            </div>
          </div>
        </div>
        <button className="experiencebtn">See More</button>
      </div>
    </section>
  );
};

export default Experience;
