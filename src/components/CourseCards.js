import React from "react";
const courses = [
  {
    title: "Python Programming",
    description:
      "Dive into the world of Python, one of the most versatile and popular programming languages. From basic syntax to advanced libraries, this course equips you with the skills to build anything from simple scripts to complex web applications.",
    imgSrc: "../images/1.jpg",
  },
  {
    title: "JavaScript Essentials",
    description:
      "Unlock the power of JavaScript, the language of the web. Learn how to create dynamic, interactive websites and applications, mastering everything from basic functions to advanced frameworks like React and Vue.js.",
    imgSrc: "../images/2.jpg",
  },
  {
    title: "MongoDB Mastery",
    description:
      "Become proficient in MongoDB, a top NoSQL database, and learn to store, query, and analyze vast data sets efficiently. This course includes basic CRUD operations and advanced aggregation techniques, ensuring you master MongoDB comprehensively.",
    imgSrc: "../images/3.jpg",
  },
  {
    title: "Java for Developers",
    description:
      "Gain a strong foundation in Java, a robust and platform-independent programming language. This course covers essential concepts and frameworks, preparing you for building scalable and efficient software applications.",
    imgSrc: "../images/4.jpg",
  },
  {
    title: "Node.js & Express.js",
    description:
      "Master building efficient and scalable server-side applications using Node.js and Express.js. This course walks you through server setup, database management, and application deployment, equipping you with the skills to launch your projects.",
    imgSrc: "../images/5.jpg",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Become a full-stack developer by mastering both front-end and back-end technologies. This comprehensive course covers HTML, CSS, JavaScript, MongoDB, Node.js, Express.js, and more, giving you the skills to build complete web applications.",
    imgSrc: "../images/6.jpg",
  },
];

const CourseCards = () => {
  return (
    <div className="container mt-5" data-aos="fade-down">
      <div className="text-center">
        <h2 className="fs-2 ">Courses</h2>
        <p className="fs-5">
          Explore a diverse range of courses designed to enhance your skills and
          knowledge.
        </p>
      </div>
      <div className="row">
        {courses.map((course, index) => (
          <div className="col-lg-4 p-1 col-md-6 col-12" key={index}>
            <div className="card">
              <img
                src={course.imgSrc}
                className="card-img-top custom-f"
                alt={course.title}
              />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">{course.description}</p>
                <a href="/item" className="btn btn-outline-primary">
                  See more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCards;
