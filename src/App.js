import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CourseCards from "./components/CourseCards";
import CarouselComponent from "./components/Carousel";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { About } from "./components/About";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ItemCart from "./components/ItemCart";
import Python from "./components/courses/python";
import AngularCourse from "./components/courses/angular";
import AspCourse from "./components/courses/aspNet";
import CppCourse from "./components/courses/c++";
import DjangoCourse from "./components/courses/django";
import DjangoStackCourse from "./components/courses/django stack";
import ExpressCourse from "./components/courses/express";
import FlaskCourse from "./components/courses/flask";
import FlutterCourse from "./components/courses/flutter";
import GoCourse from "./components/courses/go";
import JavaCourse from "./components/courses/java";
import KotlinCourse from "./components/courses/kotlin";
import LampCourse from "./components/courses/lamp";
import MeanStackCourse from "./components/courses/mean";
import MernStackCourse from "./components/courses/mern";
import ReactCourse from "./components/courses/react";
import VueCourse from "./components/courses/vue";
import SpringBootCourse from "./components/courses/springboot";
import RubyCourse from "./components/courses/ruby";
import MongoDBCourse from "./components/courses/mongodb";
import RubyOnRailsCourse from "./components/courses/rubyOnNails";
import MEVNCourse from "./components/courses/mevn";
import NodeCourse from "./components/courses/node";
import Loading from "./components/loading";
import { Order } from "./components/order";
import Wishlist from "./components/wishlist";

function App() {
  const [loading, setLoading] = useState(false);
  const [conter, setConter] = useState(0);
  const location = useLocation();
  useEffect(() => {
    const handleStartLoading = () => {
      setLoading(true);
    };
    const handleEndLoading = () => {
      setTimeout(() => setLoading(false), 2000);
    };

    handleStartLoading();
    handleEndLoading();
  }, [location.pathname]);

  return (
    <>
      <Navbar conter={conter} />
      <div className="container mt-4">
        {loading ? (
          <Loading />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Jumbotron />
                  <br />
                  <CourseCards />
                  <CarouselComponent />
                  <ContactForm />
                </>
              }
            />
            <Route path="/courses" element={<CourseCards />} />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About />} />
            <Route path="/item" element={<ItemCart setConter={setConter} />} />
            <Route path="/python" element={<Python />} />
            <Route path="/angular" element={<AngularCourse />} />
            <Route path="/aspnet" element={<AspCourse />} />
            <Route path="/cpp" element={<CppCourse />} />
            <Route path="/django" element={<DjangoCourse />} />
            <Route path="/djangoStack" element={<DjangoStackCourse />} />
            <Route path="/express" element={<ExpressCourse />} />
            <Route path="/flask" element={<FlaskCourse />} />
            <Route path="/flutter" element={<FlutterCourse />} />
            <Route path="/go" element={<GoCourse />} />
            <Route path="/java" element={<JavaCourse />} />
            <Route path="/kotlin" element={<KotlinCourse />} />
            <Route path="/lamp" element={<LampCourse />} />
            <Route path="/mean" element={<MeanStackCourse />} />
            <Route path="/mern" element={<MernStackCourse />} />
            <Route path="/react" element={<ReactCourse />} />
            <Route path="/vue" element={<VueCourse />} />
            <Route path="/springboot" element={<SpringBootCourse />} />
            <Route path="/ruby" element={<RubyCourse />} />
            <Route path="/mongodb" element={<MongoDBCourse />} />
            <Route path="/rubyonnails" element={<RubyOnRailsCourse />} />
            <Route path="/mevn" element={<MEVNCourse />} />
            <Route path="/node" element={<NodeCourse />} />
            <Route path="/order" element={<Order />} />
            <Route path="/wishlist" element={<Wishlist />} />
          </Routes>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;
