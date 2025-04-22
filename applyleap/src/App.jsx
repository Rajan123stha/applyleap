import { useState, useEffect } from "react";
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
import { CountryIndex } from "./pages/Country/CountryIndex";
import { UniversityIndex } from "./pages/University/UniversityIndex";
import CourseIndex from "./pages/Course/CourseIndex";
import Loading from "./components/Usable/Loading";
import PageNotFound from "./components/Usable/PageNotFound";
import { TermsAndConditions } from "./pages/Guide/TermsAndConditions";
import { PrivacyPolicy } from "./pages/Guide/PrivacyPolicy";
import BlogPage from "./pages/Guide/BlogPage";
import Breadcrumbs from "./components/Usable/Breadcrumb";
import { ScholarshipPage } from "./pages/Scholarship/ScholarshipPage";
import ContentWithAds from "./components/Usable/AdsWithContent";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <Header />

          {/* Main Content */}
          <main className="flex-grow mt-16">
            <Breadcrumbs />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/countries/" element={<CountryIndex />} />
              <Route path="/universities/" element={<UniversityIndex />} />
              <Route path="/countries/:slug" element={<Country />} />
              <Route path="/test/:slug" element={<Test />} />
              <Route path="/scholarship/:slug" element={<Scholarships />} />
              <Route path="/scholarship" element={<ScholarshipPage />} />
              <Route path="/universities/:slug" element={<University />} />
              <Route path="/blogs" element={<BlogDetails />} />
              <Route path="/courses" element={<CourseIndex />} />
              <Route path="/courses/:slug" element={<Course />} />
              <Route path="/blogs/:slug" element={<BlogWithSidebar />} />
              <Route path="/destination/" element={<DestinationPage />} />
              <Route
                path="/application-guide/"
                element={<ApplicationGuide />}
              />
              <Route
                path="/document-preparation-guide/"
                element={<DocumentPreparationGuide />}
              />
              <Route
                path="/scholarship-guide/"
                element={<ScholarshipGuide />}
              />
              <Route path="/visa-guide/" element={<VisaGuide />} />
              <Route path="/events/" element={<EventsPage />} />
              <Route path="/contact-us/" element={<ContactUs />} />
              <Route path="*" element={<PageNotFound />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/ads-test" element={<ContentWithAds />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/demo/:id" element={<BlogPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
