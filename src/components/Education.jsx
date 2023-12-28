import React, { useState } from "react";
import contentData from "../content.json";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  // Extract the education data from the contentData file
  const education = contentData.academics;
  const [showMore, setShowMore] = useState(false);
  const [showButton, setShowButton] = useState(true);

  // Calculate the total credits for each year
  const totalCreditsPerYear = education.years.map((year) => {
    return parseFloat(
      year.courses.reduce((total, course) => {
        return total + course.credits;
      }, 0)
    );
  });

  education.years.sort((a, b) => b.year - a.year);

  // Render the education section
  return (
    <Fade triggerOnce={true}>
      <section id="education">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <h3 className="title-a">
                  {education.section.title} <div className="line-mf"></div>
                </h3>
                <p className="subtitle-a">{education.section.description}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="row">
                <div className="col-md-6">
                  <Fade delay={0} cascade={false} triggerOnce={true}>
                    <div className="education">
                      <table>
                        <thead>
                          <tr>
                            <th>
                              {education.years[0].semester}{" "}
                              {education.years[0].year} Courses
                            </th>
                            <th>Credits</th>
                          </tr>
                        </thead>
                        <tbody>
                          {education.years[0].courses.map((course, index) => (
                            <tr key={index}>
                              <td data-tooltip={course.abbreviation}>
                                {course.name}
                              </td>
                              <td>{course.credits.toFixed(1)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Fade>
                </div>
              </div>
              {education.years.length > 1 && (
                <div className="row">
                  <div className="col-sm-12">
                    {showButton && (
                      <button
                        className="show-more-button"
                        onClick={() => {
                          setShowMore(true);
                          setShowButton(false);
                        }}
                      >
                        Show More
                      </button>
                    )}
                  </div>
                </div>
              )}
              {showMore &&
                education.years.map((year, index) => (
                  <div className="col-md-6" key={index}>
                    <Fade
                      delay={index * 200}
                      cascade={false}
                      triggerOnce={true}
                    >
                      <div className="education">
                        <table>
                          <thead>
                            <tr>
                              <th>
                                {year.semester} {year.year} Courses
                              </th>
                              <th>Credits</th>
                            </tr>
                          </thead>
                          <tbody>
                            {year.courses.map((course, index) => (
                              <tr key={index}>
                                <td data-tooltip={course.abbreviation}>
                                  {course.name}
                                </td>
                                <td>{course.credits.toFixed(1)}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </Fade>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default Education;
