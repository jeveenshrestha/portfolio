import React from "react";

const education = [
  {
    degree: "Bachelors Degree, Information Technology and Communication",
    institute: "Oulu University of Applied Sciences | Oulu, Finland",
    graduationYear: "2016",
  },
  {
    degree: "Intermediate in Science",
    institute: "Little Angels' College | Lalitpur, Nepal",
    graduationYear: "2006",
  },
];

const Education = () => {
  return (
    <section className="eduction">
      <h3>EDUCATION</h3>
      {education.map((degree) => (
        <section>
          <h2>{degree.degree}</h2>
          <h4>{degree.institute}</h4>
          <h5>{degree.graduationYear}</h5>
        </section>
      ))}
    </section>
  );
};

export default Education;
