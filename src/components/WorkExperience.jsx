import React, { useState } from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

const WorkExperience = () => {
  const { experience } = contentData;
  const experienceItems = experience.experience_items;

  const [activeJobIndex, setActiveJobIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveJobIndex(index);
  };

  return (
    <Fade triggerOnce={true}>
      <section className="Experience-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a" id="experience">
                  {experience.section.title}
                  <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">{experience.section.description}</p>
              </div>
            </div>
          </div>

          <div className="col-sm-12">
            <style>
              {`
                @media (max-width: 768px) {
                  
                  .wrapper {
                    flex-direction: column;
                  }
                  .indicator {
                    flex-direction: row;
                    overflow-x: auto;
                    padding-bottom: 10px;
                  }
                  .indicator li {
                    margin-right: 10px;
                    white-space: nowrap;
                  }
                  .content {
                    margin-top: 20px;
                  }
                }
              `}
            </style>
            <div className="wrapper">
              <Fade triggerOnce={true}>
                <ul className="indicator">
                  {experienceItems.map((job, index) => (
                    <li
                      key={index}
                      className={index === activeJobIndex ? "active" : ""}
                      onClick={() => handleTabClick(index)}
                      data-target={job.organization.split(" ").join("-")}
                    >
                      {job.organization}
                    </li>
                  ))}
                </ul>
              </Fade>
              <div className="content">
                <h1>
                  {experienceItems[activeJobIndex].title} @{" "}
                  {experienceItems[activeJobIndex].organization}
                </h1>
                <h4>
                  {experienceItems[activeJobIndex].start_date} -{" "}
                  {experienceItems[activeJobIndex].end_date}
                </h4>
                <Fade damping={0.1} triggerOnce={true}>
                  <ul>
                    {experienceItems[activeJobIndex].description.map(
                      (paragraph, paraIndex) => (
                        <li className="active" key={paraIndex}>
                          {paragraph}
                        </li>
                      )
                    )}
                  </ul>
                </Fade>
                {experienceItems[activeJobIndex].organization ===
                  "Publicis Sapient" && (
                  <div style={{ overflow: 'hidden', width: '100%', maxWidth: '710px', height: '399px' }}>
                  <iframe
                    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7141514816577310721?compact=1"
                    height="399"
                    width="710"
                    allowFullScreen=""
                    title="Embedded post"
                    autoPlay="1"
                    style={{ border: 'none', overflow: 'hidden' }}
                  ></iframe>
                  </div>
                )}
                {experienceItems[activeJobIndex].organization === "T-Mobile" && (
                  <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <img 
                      src="./images/Tmobilelogo.png" 
                      alt="T-Mobile Logo" 
                      style={{ width: '150px', height: 'auto' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default WorkExperience;
