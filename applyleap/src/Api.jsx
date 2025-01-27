import axios from "axios";

// Set the base URL for your server
//const API_BASE_URL = "http://52.66.68.109:8000/api/v2/";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const baseUrl = import.meta.env.VITE_BASE_URL;

// Define and export the generateImageUrl function
export const generateImageUrl = (image) => {
  return `${baseUrl}${image}`;
};
// Fetch all pagess
export const fetchPages = async () => {
  const response = await axios.get(`${API_BASE_URL}pages/`);
  return response.data;
};

// Fetch a page by ID
export const fetchPageById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}pages/${id}/`);
  console.log(response.data);
  return response.data;
};

// Fetch a destination by slug
export const fetchDestinationBySlug = async (slug) => {
  const response = await axios.get(`${API_BASE_URL}pages/?slug=${slug}`);
  return response.data.items[0]; // Assuming slug is unique
};

// Fetch details from a destination's detail URL
export const fetchDestinationDetails = async (detailUrl) => {
  // Ensure the detail URL is replaced with the server's public IP
  const fixedUrl = detailUrl.replace(
    "http://localhost",
    "https://admin.applyleap.com"
  );
  const response = await axios.get(fixedUrl);
  return response.data;
};

// Fetch blogs
export const fetchBlogs = async () => {
  try {
    // Fetch blog pages from the API
    const response = await axios.get(
      `${API_BASE_URL}pages/?type=blog.BlogPage`
    );
    const blogs = response.data.items;

    // Fetch detailed information for each blog
    const detailedBlogs = await Promise.all(
      blogs.map(async (blog) => {
        const detailedData = await fetchDestinationDetails(
          blog.meta.detail_url
        );

        // Format the date
        const formattedDate = new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date(detailedData.publish_date));

        return {
          title: blog.title,
          writer: detailedData.writer,
          date: formattedDate,
          category: detailedData.category,
          image: detailedData.banner_image || null, // Extract banner image URL
        };
      })
    );

    return detailedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

export const fetchDestinations = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}pages/?type=destination.DestinationPage`
    );
    const destinations = response.data.items;

    const destinationData = await Promise.all(
      destinations.map(async (destination) => {
        const detailedData = await fetchDestinationDetails(
          destination.meta.detail_url
        );

        return {
          name: destination.title,
          description: detailedData.quote,

          image: detailedData.banner_image || null, // Extract banner image URL
        };
      })
    );

    return destinationData;
  } catch (error) {
    console.error("Error fetching destinations:", error);
  }
};

// Function to fetch blogs by category
export const fetchBlogsByCategory = async (categoryTitle) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}pages/?type=blog.BlogPage`
    );
    const blogs = response.data.items;

    // Fetch detailed data for filtered blogs
    const detailedBlogs = await Promise.all(
      blogs.map(async (blog) => {
        const detailedData = await fetchDestinationDetails(
          blog.meta.detail_url
        );

        // Format the date
        const formattedDate = new Intl.DateTimeFormat("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }).format(new Date(detailedData.publish_date));

        return {
          title: blog.title,
          writer: detailedData.writer,
          date: formattedDate,
          category: detailedData.category,
          image: detailedData.banner_image || null, // Extract banner image URL
        };
      })
    );
    // Filter blogs by the specified category

    const filteredBlogs = detailedBlogs.filter((blog) => {
      return blog.category === categoryTitle; // Corrected filter syntax
    });

    return filteredBlogs;
  } catch (error) {
    console.error("Error fetching blogs by category:", error);
  }
};

// Function to fetch country for header
export const fetchDestination = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}pages/?type=destination.DestinationPage`
    );
    const destinations = response.data.items;

    return destinations;
  } catch (error) {
    console.error("Error fetching destinations:", error);
  }
};

export const fetchCourses = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}pages/?type=course.CoursePage`
    );
    const destinations = response.data.items;

    const destinationData = await Promise.all(
      destinations.map(async (destination) => {
        const detailedData = await fetchDestinationDetails(
          destination.meta.detail_url
        );

        return {
          name: destination.title,
          description: detailedData.one_liner,
          field: detailedData.field,
          duration: detailedData.duration,

          image: detailedData.banner_image || null, // Extract banner image URL
        };
      })
    );

    return destinationData;
  } catch (error) {
    console.error("Error fetching destinations:", error);
  }
};

export const fetchUniversity = async () => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}pages/?type=university.UniversityPage`
    );
    const destinations = response.data.items;

    const destinationData = await Promise.all(
      destinations.map(async (destination) => {
        const detailedData = await fetchDestinationDetails(
          destination.meta.detail_url
        );

        return {
          name: destination.title,
          location: detailedData.location,
          ranking: detailedData.rank,
          tuitionFee: detailedData.fee_range,
          internationalStudents: detailedData.international_students_percentage,

          image: detailedData.banner_image || null, // Extract banner image URL
        };
      })
    );

    return destinationData;
  } catch (error) {
    console.error("Error fetching destinations:", error);
  }
};
