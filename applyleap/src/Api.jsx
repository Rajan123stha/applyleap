import axios from "axios";

// Set the base URL for your server
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Define and export the generateImageUrl function
export const generateImageUrl = (image) => {
  return `${API_BASE_URL}${image}`;
};

// Fetch pages by slug (this works for various collections)
export const fetchPageBySlug = async (slug, collection) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}${collection}?where[slug][equals]=${slug}`
    );

    console.log(response.data);
    return response.data.docs[0]; // Return the first item assuming slug is unique
  } catch (error) {
    console.error(`Error fetching page by slug from ${collection}:`, error);
  }
};

// Fetch pages (this works for various events)
export const fetchPage = async (collection) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${collection}`);
    console.log(response.data);
    return response.data.docs[0]; // Return the first item assuming slug is unique
  } catch (error) {
    console.error(`Error fetching page by slug from ${collection}:`, error);
  }
};

// Fetch a specific blog by slug
export const fetchBlogBySlug = async (slug) => {
  return await fetchPageBySlug(slug, "blogs");
};

// Fetch destination by slug
export const fetchDestinationBySlug = async (slug) => {
  return await fetchPageBySlug(slug, "destinations");
};

// Fetch course by slug
export const fetchCourseBySlug = async (slug) => {
  return await fetchPageBySlug(slug, "courses");
};

// Fetch university by slug
export const fetchUniversityBySlug = async (slug) => {
  return await fetchPageBySlug(slug, "universities");
};

// Fetch test by slug
export const fetchTestBySlug = async (slug) => {
  return await fetchPageBySlug(slug, "tests");
};

// Fetch scholarship by slug
export const fetchScholarshipBySlug = async (slug) => {
  return await fetchPageBySlug(slug, "scholarships");
};
// Fetch events by slug
export const fetchEventBySlug = async () => {
  return await fetchPage("events");
};

// Fetch blogs
export const fetchBlogDetails = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}blogs`);
    const blogs = response.data.docs;

    const detailedBlogs = await Promise.all(
      blogs.map(async (blog) => {
        const detailedData = await fetchBlogBySlug(blog.slug);
        console.log("t", detailedData);
        return {
          id: blog.id,
          title: blog.title,
          writer: detailedData.writer,
          date: new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }).format(new Date(detailedData.publishDate)),
          category: detailedData.category.title,
          bannerImage: detailedData.bannerImage || null, // Extract banner image URL
        };
      })
    );

    return detailedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

// Fetch destinations
export const fetchDestinations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}destinations`);

    const destinations = response.data.docs;
    console.log(destinations);
    const destinationData = await Promise.all(
      destinations.map(async (destination) => {
        const detailedData = await fetchDestinationBySlug(destination.slug);
        console.log("detail:", detailedData);
        return {
          name: destination.title,
          description: detailedData.quote,
          image: detailedData.bannerImage || null, // Extract banner image URL
        };
      })
    );

    return destinationData;
  } catch (error) {
    console.error("Error fetching destinations:", error);
  }
};

//for list of destination
export const fetchDestination = async () => {
  try {
    console.log("fetching destinations");
    const response = await axios.get(`${API_BASE_URL}destinations`); // Use correct API endpoint
    console.log(response);
    return response.data.docs; // Assuming 'items' is the array of destinations
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw new Error("Failed to fetch destinations");
  }
};
// Fetch courses
export const fetchCoursDetail = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}courses`);
    const courses = response.data.docs;

    const courseData = await Promise.all(
      courses.map(async (course) => {
        const detailedData = await fetchCourseBySlug(course.slug);

        return {
          title: course.title,
          description: detailedData.description,
          field: detailedData.field,
          duration: detailedData.duration,
          bannerImage: detailedData.bannerImage || null, // Extract banner image URL
        };
      })
    );

    return courseData;
  } catch (error) {
    console.error("Error fetching courses:", error);
  }
};

// Fetch universitie detail
export const fetchUniversityDetail = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}universities`);

    const universities = response.data.docs;

    const universityData = await Promise.all(
      universities.map(async (university) => {
        console.log("uni", university);
        const detailedData = await fetchUniversityBySlug(university.slug);
        console.log("detailedData", detailedData);
        return {
          name: university.name,
          location: detailedData.location,
          ranking: detailedData.rank,
          tuitionFee: detailedData.feeRange,
          internationalStudents: detailedData.internationalStudentsPercentage,
          image: detailedData.bannerImage || null, // Extract banner image URL
        };
      })
    );
    console.log(universityData);
    return universityData;
  } catch (error) {
    console.error("Error fetching universities:", error);
  }
};

//list of university
export const fetchUniversities = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}universities`); // Use the correct API endpoint for universities
    return response.data.docs; // Assuming 'items' is the array of universities
  } catch (error) {
    console.error("Error fetching universities:", error);
    throw new Error("Failed to fetch universities");
  }
};

//list of courses
export const fetchCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}courses`); // Use the correct API endpoint for courses
    console.log(response.data.docs);
    return response.data.docs; // Assuming 'items' is the array of courses
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
};

//list of blogs
export const fetchBlogs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}blogs`); // Use the correct API endpoint for blogs
    return response.data.docs; // Assuming 'items' is the array of blogs
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw new Error("Failed to fetch blogs");
  }
};

export const fetchImageById = async (id) => {
  try {
    console.log("Fetching image with ID:", id);
    const response = await axios.get(`${API_BASE_URL}media/${id}`);
    console.log("Image data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};
