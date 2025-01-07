import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Country from "./pages/Country/Country";
import { Route, Router, Routes } from "react-router-dom";
import { Test } from "./pages/Tests/Test";
import { Scholarships } from "./pages/Scholarship/Scholarships";
import University from "./pages/University/University";

import BlogWithSidebar from "./pages/Blog/BlogPage";
import DestinationPage from "./pages/Country/DestinationPage";
import BlogDetails from "./pages/Blog/BlogDetails";
import Course from "./pages/Course/Course";
import { ApplicationGuide } from "./pages/Guide/ApplicationGuide";
import { DocumentPreparationGuide } from "./pages/Guide/DocumentGuide";
import { ScholarshipGuide } from "./pages/Guide/ScholarshipGuide";
import VisaGuide from "./pages/Guide/VisaGuide";
import { EventsPage } from "./pages/Guide/Events";
import { ContactUs } from "./pages/Guide/ContactUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/country/:slug" element={<Country />} />
        <Route path="/test/:slug" element={<Test />} />
        <Route path="/scholarship" element={<Scholarships />} />
        <Route path="/university/:slug" element={<University />} />
        <Route path="/blog" element={<BlogDetails />} />
        <Route path="/course" element={<Course />} />
        <Route path="/blogs/:slug" element={<BlogWithSidebar />} />
        <Route path="/destination/" element={<DestinationPage />} />
        <Route path="/application/" element={<ApplicationGuide />} />
        <Route path="/document/" element={<DocumentPreparationGuide />} />
        <Route path="/scholarship-guide/" element={<ScholarshipGuide />} />
        <Route path="/visa/" element={<VisaGuide />} />
        <Route path="/events/" element={<EventsPage />} />
        <Route path="/contact-us/" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
