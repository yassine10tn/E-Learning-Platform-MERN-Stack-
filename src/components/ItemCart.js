import React, { useRef, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "react-bootstrap";

const courses = [
  {
    title: "Node.js",
    link: "/node",
    diffuclty: "meduim",
    duration: "short-term",
    desc: "Node.js allows JavaScript to run on the server, using a non-blocking I/O model for scalable, efficient web applications. This enhances performance by handling multiple connections simultaneously.",
    img: "../images/n.jpeg",
    price: "$99.99",
    category: "Frameworks",
    certification: true,
  },
  {
    title: "MongoDB",
    link: "/mongodb",
    diffuclty: "meduim",
    duration: "medium-term",
    desc: "MongoDB is a NoSQL, document-oriented database that uses JSON-like documents with optional schemas. It is designed for scalability and flexibility, making it suitable for applications with diverse data types and evolving data structures.",
    img: "../images/m.jpg",
    price: "$90",
    category: "Databases",
    certification: false,
  },
  {
    title: "Express.js",
    link: "/express",
    diffuclty: "meduim",
    duration: "short-term",
    desc: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies routing and middleware handling in Node.js applications.",
    img: "../images/ex.jpg",
    price: "$60",
    category: "Frameworks",
    certification: true,
  },
  {
    title: "React",
    link: "/react",
    diffuclty: "easy",
    duration: "short-term",
    desc: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage the state of applications efficiently. React is maintained by Facebook and has a strong ecosystem of tools and libraries.",
    img: "../images/react.png",
    price: "$75",
    category: "Frameworks",
    certification: true,
  },
  {
    title: "Angular",
    link: "/angular",
    diffuclty: "meduim",
    duration: "short-term",
    desc: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Developed by Google, it provides a comprehensive solution for building dynamic and high-performance web applications.",
    img: "../images/a.jpg",
    price: "$70",
    category: "Frameworks",
    certification: true,
  },
  {
    title: "Python",
    link: "/python",
    diffuclty: "easy",
    duration: "medium-term",
    desc: "Python is a high-level, interpreted programming language known for its readability and versatility. It is widely used in web development, data science, artificial intelligence, and automation.",
    img: "../images/py.jpeg",
    price: "$70",
    category: "Programming Languages",
    certification: true,
  },
  {
    title: "Ruby",
    link: "/ruby",
    diffuclty: "hard",
    duration: "medium-term",
    desc: "Ruby is a dynamic, object-oriented programming language known for its simplicity and productivity. It is often used with the Ruby on Rails framework for web development.",
    img: "../images/ru.jpg",
    price: "$60",
    category: "Programming Languages",
    certification: false,
  },
  {
    title: "Django",
    link: "/django",
    diffuclty: "meduim",
    duration: "medium-term",
    desc: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It comes with many built-in features, such as an admin interface, authentication, and an ORM (Object-Relational Mapping) system.",
    img: "../images/d.jpg",
    price: "$70",
    category: "Frameworks",
    certification: true,
  },
  {
    title: "Spring Boot",
    link: "/springboot",
    diffuclty: "hard",
    duration: "medium-term",
    desc: "Spring Boot is a Java-based framework used to create stand-alone, production-grade Spring-based applications. It simplifies the setup and configuration of Spring applications with convention over configuration.",
    img: "../images/spring.jpg",
    price: "$90",
    category: "Frameworks",
    certification: true,
  },
  {
    title: "Flask",
    link: "/flask",
    diffuclty: "meduim",
    duration: "short-term",
    desc: "Flask is a micro web framework written in Python. It is lightweight and modular, allowing developers to build web applications with minimal setup and maximum flexibility.",
    img: "../images/fa.jpg",
    price: "$65",
    category: "Frameworks",
    certification: false,
  },
  {
    title: "ASP.NET Core",
    link: "/aspnet",
    diffuclty: "hard",
    duration: "medium-term",
    desc: "ASP.NET Core is a cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications. It is developed by Microsoft and is used with C# and .NET.",
    img: "../images/asp.png",
    price: "$70",
    category: "Frameworks",
    certification: true,
  },
  {
    title: "Vue.js",
    link: "/vue",
    diffuclty: "easy",
    duration: "short-term",
    desc: "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable, making it easy to integrate with other projects and libraries.",
    img: "../images/v.jpg",
    price: "$80",
    category: "Frameworks",
    certification: true,
  },
  {
    title: "Flutter",
    link: "/flutter",
    diffuclty: "flutter",
    duration: "short-term",
    desc: "Flutter allows developers to create natively compiled applications for mobile, web, and desktop from a single codebase. By leveraging the Dart language and a reactive framework, Flutter ensures efficient, smooth UI rendering and handles multiple platforms seamlessly.",
    img: "../images/Flutter.png",
    price: "$80",
    category: "Mobile Development",
    certification: true,
  },
  {
    title: "Java",
    link: "/java",
    diffuclty: "hard",
    duration: "medium-term",
    desc: "Java facilitates robust, object-oriented programming for Android and other platforms, using a write-once, run-anywhere approach. This ensures reliability and performance by managing memory efficiently and supporting extensive libraries for diverse applications.",
    img: "../images/java.png",
    price: "$80",
    category: "Programming Languages",
    certification: true,
  },
  {
    title: "Kotlin",
    link: "/kotlin",
    diffuclty: "hard",
    duration: "medium-term",
    desc: "Kotlin enables modern, statically-typed programming for Android and other platforms, offering concise syntax and interoperability with Java. This improves performance by reducing boilerplate code and supporting robust, efficient app development.",
    img: "../images/kotlin.jpeg",
    price: "$90",
    category: "Programming Languages",
    certification: true,
  },
  {
    title: "Go",
    link: "/go",
    diffuclty: "meduim",
    duration: "short-term",
    desc: "Go empowers developers to build efficient, high-performance web applications. Its simplicity and speed make it ideal for scalable, cloud-based solutions, with a strong concurrency model and robust standard library supporting streamlined development.",
    img: "../images/go.png",
    price: "$60",
    category: "Programming Languages",
    certification: false,
  },
  {
    title: "C++",
    link: "/cpp",
    diffuclty: "meduim",
    duration: "medium-term",
    desc: "C++ enables high-performance programming with a focus on system-level and application development. Its support for both low-level memory manipulation and high-level abstractions enhances efficiency, making it ideal for performance-critical applications and complex software.",
    img: "../images/c++.jpg",
    price: "$90",
    category: "Programming Languages",
    certification: false,
  },
  {
    title: "Mern",
    link: "/mern",
    diffuclty: "hard",
    duration: "long-term",
    desc: "The MERN stack empowers developers to create dynamic web applications using MongoDB, Express.js, React, and Node.js. With JavaScript across the stack, it ensures streamlined development, robust performance, and seamless user experiences across platforms.",
    img: "../images/mern.png",
    price: "$250",
    category: "Stacks",
    certification: true,
  },
  {
    title: "Mean",
    link: "/mean",
    diffuclty: "hard",
    duration: "long-term",
    desc: "The MEAN stack enables developers to build dynamic web applications using MongoDB, Express.js, Angular, and Node.js. Leveraging JavaScript throughout, it ensures efficient development, strong performance, and consistent user experiences across various platforms.",
    img: "../images/mean.jpg",
    price: "$240",
    category: "Stacks",
    certification: true,
  },
  {
    title: "Django Stack",
    link: "/djangoStack",
    diffuclty: "hard",
    duration: "long-term",
    desc: "The Django stack enables developers to create dynamic web applications using Python, Django, and a PostgreSQL or MySQL database. By leveraging Django’s robust framework, it ensures rapid development, high performance, and secure, scalable web applications",
    img: "../images/django.jpeg",
    price: "$280",
    category: "Stacks",
    certification: true,
  },
  {
    title: "Lamp",
    link: "/lamp",
    diffuclty: "hard",
    duration: "long-term",
    desc: "The LAMP stack allows developers to create dynamic web applications using Linux, Apache, MySQL, and PHP. By leveraging open-source technologies, it ensures reliable performance, flexible development, and secure, scalable web solutions.",
    img: "../images/lamp.png",
    price: "$320",
    category: "Stacks",
    certification: true,
  },
  {
    title: "Mevn",
    link: "/mevn",
    diffuclty: "hard",
    duration: "long-term",
    desc: "The MEVN stack enables developers to build dynamic web applications using MongoDB, Express.js, Vue.js, and Node.js. Utilizing JavaScript throughout, it ensures efficient development, strong performance, and smooth user experiences across different platforms.",
    img: "../images/Mevn.png",
    price: "$210",
    category: "Stacks",
    certification: true,
  },
  {
    title: "Ruby on Rails",
    link: "/rubyonnails",
    diffuclty: "hard",
    duration: "long-term",
    desc: "The Ruby on Rails stack enables developers to build dynamic web applications using Ruby, Rails, and a PostgreSQL or MySQL database. With Rails’ convention-over-configuration approach, it ensures quick development, efficient performance, and scalable, maintainable applications.",
    img: "../images/rub.jpg",
    price: "$280",
    category: "Stacks",
    certification: true,
  },
];

const ItemCart = ({ setConter }) => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [selectedDifficulties, setSelectedDifficulties] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCertifications, setSelectedCertifications] = useState([]);
  const [minPrice, setMinPrice] = useState(40);
  const [maxPrice, setMaxPrice] = useState(320);
  const [wishlist, setWishlist] = useState([]);
  const refs = useRef(courses.map(() => React.createRef()));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDifficultyChange = (difficulty) => {
    setSelectedDifficulties((prevState) =>
      prevState.includes(difficulty)
        ? prevState.filter((item) => item !== difficulty)
        : [...prevState, difficulty]
    );
  };

  const handleDurationChange = (duration) => {
    setSelectedDurations((prevState) =>
      prevState.includes(duration)
        ? prevState.filter((item) => item !== duration)
        : [...prevState, duration]
    );
  };

  const handleCertificationChange = (certificationStatus) => {
    setSelectedCertifications((prevState) =>
      prevState.includes(certificationStatus)
        ? prevState.filter((item) => item !== certificationStatus)
        : [...prevState, certificationStatus]
    );
  };

  const handlePriceChange = (event) => {
    const value = event.target.value;
    if (event.target.id === "minPrice") {
      setMinPrice(parseFloat(value));
    } else if (event.target.id === "maxPrice") {
      setMaxPrice(parseFloat(value));
    }
  };

  const filterCourses = () => {
    let updatedCourses = courses;

    if (query) {
      updatedCourses = updatedCourses.filter((course) =>
        course.title.toLowerCase().includes(query)
      );
    }

    if (selectedCategory) {
      updatedCourses = updatedCourses.filter(
        (course) => course.category === selectedCategory
      );
    }

    if (selectedDifficulties.length > 0) {
      updatedCourses = updatedCourses.filter((course) =>
        selectedDifficulties.includes(course.diffuclty)
      );
    }

    if (selectedDurations.length > 0) {
      updatedCourses = updatedCourses.filter((course) =>
        selectedDurations.includes(course.duration)
      );
    }

    if (selectedCertifications.length > 0) {
      updatedCourses = updatedCourses.filter((course) =>
        selectedCertifications.includes(
          course.certification ? "certified" : "non-certified"
        )
      );
    }

    updatedCourses = updatedCourses.filter((course) => {
      const price = parseFloat(course.price.replace("$", ""));
      return price >= minPrice && price <= maxPrice;
    });

    setFilteredCourses(updatedCourses);
  };

  useEffect(() => {
    filterCourses();
  }, [
    query,
    selectedDifficulties,
    selectedCategory,
    selectedDurations,
    selectedCertifications,
    minPrice,
    maxPrice,
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleAddToCart = () => {
    setConter((prevCount) => prevCount + 1); 
  };
  const handleAddToWishlist = async (course) => {
    try {
      setWishlist((prevWishlist) => [
        ...prevWishlist,
        {
          img: course.img,
          desc: course.desc,
          price: course.price,
        },
      ]);

      const response = await axios.post("http://localhost:8080/api/wishlist", {
        img: course.img,
        desc: course.desc,
        price: course.price,
      });

      console.log(response.data); // Log the backend response
      toast.success("Item added to wishlist !")
    } catch (error) {
      console.error("Error adding to wishlist:", error);
      Toast.error("Error adding to wishlist");
    }
  };

  return (
    <div className="container mb-4 " data-aos="fade-right">
      <ToastContainer/>
      {/* Breadcrumb */}
      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-dark">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/item" className="text-decoration-none text-dark">
                All Courses
              </a>
            </li>
          </ol>
        </nav>
      </div>
      <h1 className="text-center mb-2">Choose Your Courses</h1>
      <br />

      <div className="input-group mb-4">
        <>
          <div className="px-2">
            <Button className="btn btn-primary" onClick={handleShow}>
              More Search Options
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title className="fw-bold fs-4 text-warning">
                  Filter
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <h6>
                  This section is designed to help you quickly find the product
                  you need with ease and efficiency.
                </h6>
                <hr />

                {/* Price Filter */}
                <div>
                  <label
                    htmlFor="customRange1"
                    className="form-label fs-6 fw-bold"
                  >
                    Price
                  </label>
                  <hr />
                  <div>
                    <span>
                      {minPrice} TND - {maxPrice} TND
                    </span>
                  </div>
                  <input
                    type="range"
                    className="form-range"
                    id="minPrice"
                    min="40"
                    max="320"
                    value={minPrice}
                    onChange={handlePriceChange}
                  />
                  <input
                    type="range"
                    className="form-range"
                    id="maxPrice"
                    min="40"
                    max="320"
                    value={maxPrice}
                    onChange={handlePriceChange}
                  />
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label htmlFor="" className="mt-4 fs-6 fw-bold">
                    Difficulty
                  </label>
                  <hr />
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => handleDifficultyChange("easy")}
                      checked={selectedDifficulties.includes("easy")}
                    />
                    <span> Easy </span>
                    <br />
                    <input
                      type="checkbox"
                      onChange={() => handleDifficultyChange("meduim")}
                      checked={selectedDifficulties.includes("meduim")}
                    />
                    <span> Medium </span>
                    <br />
                    <input
                      type="checkbox"
                      onChange={() => handleDifficultyChange("hard")}
                      checked={selectedDifficulties.includes("hard")}
                    />
                    <span> Hard </span>
                  </div>
                </div>

                {/* Course Duration Filter */}
                <div>
                  <label htmlFor="" className="mt-4 fs-6 fw-bold">
                    Course Duration
                  </label>
                  <hr />
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => handleDurationChange("short-term")}
                      checked={selectedDurations.includes("short-term")}
                    />
                    <span> Short-term courses (a few hours to a few days)</span>
                    <br />
                    <input
                      type="checkbox"
                      onChange={() => handleDurationChange("medium-term")}
                      checked={selectedDurations.includes("medium-term")}
                    />
                    <span> Medium-term courses (a few weeks)</span>
                    <br />
                    <input
                      type="checkbox"
                      onChange={() => handleDurationChange("long-term")}
                      checked={selectedDurations.includes("long-term")}
                    />
                    <span> Long-term courses (a few months)</span>
                  </div>
                </div>

                {/* Certification */}
                <div>
                  <label htmlFor="" className="mt-4 fs-6 fw-bold">
                    Certification
                  </label>
                  <hr />
                  <div>
                    <input
                      type="checkbox"
                      onChange={() => handleCertificationChange("certified")}
                      checked={selectedCertifications.includes("certified")}
                    />
                    <span>
                      {" "}
                      Courses that offer certification upon completion.
                    </span>
                    <br />
                    <input
                      type="checkbox"
                      onChange={() =>
                        handleCertificationChange("non-certified")
                      }
                      checked={selectedCertifications.includes("non-certified")}
                    />
                    <span> Courses without certification.</span>
                    <br />
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </>

        {/* Search input */}
        <div className="form-outline w-25">
          <input
            type="search"
            id="form1"
            className="form-control p-2"
            placeholder="Search for your course"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
          />
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search"></i>
        </button>

        <div className="dropdown px-3">
          <button
            className="btn btn-secondary dropdown-toggle p-2"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Search By Category
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSelectedCategory("Programming Languages")}
              >
                Programming Languages
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSelectedCategory("Frameworks")}
              >
                Frameworks/libraries
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setSelectedCategory("Databases")}
              >
                Databases
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="row py-2">
        {filteredCourses.map((course, index) => {
          const inputRef = refs.current[index];

          return (
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100 w-100 shadow p-2">
                <img
                  src={course.img}
                  className="card-img-top w-100 img-fluid custom-f"
                  alt={course.title}
                  style={{ height: 170, borderRadius: "10px" }}
                />

                <div className="card-body">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text">{course.desc}</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-3 gap-2 w-90">
                  <span className="badge bg-secondary pr-2 w-100 fs-5">
                    {course.price}
                  </span>
                </div>
                <div>
                  <Link
                    className="btn btn-success custom-button w-100 mb-2"
                    to={course.link}
                  >
                    More information
                  </Link>

                  <button
                    className="btn btn-primary custom-button w-100 mb-2 "
                    onClick={() => {
                      handleAddToCart();
                      handleAddToWishlist(course);
                    }}
                  >
                    <svg
                      style={{ width: 20 }}
                      aria-hidden="true"
                      stroke="currentColor"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"

                      ></path>
                    </svg>
                    Add it to santa wishlist
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemCart;
