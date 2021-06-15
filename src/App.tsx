import React from "react";
import "./styles/index.scss";
import "./App.css";
import ContentHeader from "./components/content-header/ContentHeader";
import Navbar from "./components/navbar/Navbar";
import CourseSection from "./components/course-section/CourseSection";
import StudentsCourse from "./components/students-course/StudentsCourse";
import Categories from "./components/categories/Categories";
import Instructor from "./components/instructor/Instructor";
import Business from "./components/udemy-for-business/Business";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <ContentHeader />
      <CourseSection />
      <StudentsCourse />
      <Categories />
      <Instructor />
      <Business />
      <Footer />
    </div>
  );
}

export default App;
