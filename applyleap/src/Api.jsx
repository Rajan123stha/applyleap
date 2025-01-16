import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api/v2";

export const fetchPages = async () => {
  const response = await axios.get(`${API_BASE_URL}/pages/`);
  return response.data;
};

export const fetchPageById = async () => {
  const response = await axios.get(`${API_BASE_URL}/pages/4/`);
  console.log(response.data);
  return response.data;
};

// Fetch data from the detail_url of a specific destination
export const fetchDestinationBySlug = async (slug) => {
  const response = await axios.get(`${API_BASE_URL}/pages/?slug=${slug}`);
  return response.data.items[0]; // Assuming slug is unique
};

export const fetchDestinationDetails = async (detailUrl) => {
  const fixedUrl = detailUrl.replace(
    "http://localhost",
    "http://127.0.0.1:8000"
  );
  const response = await axios.get(fixedUrl);
  return response.data;
};

export const fetchBlogs = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v2/pages/?type=blog.BlogPage"
    );
    const blogs = response.data.items;
    console.log("All Blog:", blogs);
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

    console.log("Detailed Blogs:", detailedBlogs);
    return detailedBlogs;
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }
};

export const fetchDestinations = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v2/pages/?type=destination.DestinationPage"
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
      "http://127.0.0.1:8000/api/v2/pages/?type=blog.BlogPage"
    );
    const blogs = response.data.items;
    console.log("All Blogs:", blogs);

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
        console.log("Curl:", detailedData.banner_image?.url);
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
    console.log("before:", detailedBlogs);
    const filteredBlogs = detailedBlogs.filter((blog) => {
      return blog.category === categoryTitle; // Corrected filter syntax
    });
    console.log("Related Blogs:", filteredBlogs);
    return filteredBlogs;
  } catch (error) {
    console.error("Error fetching blogs by category:", error);
  }
};

// Function to fetch country for header
export const fetchDestination = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/v2/pages/?type=destination.DestinationPage"
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
      "http://127.0.0.1:8000/api/v2/pages/?type=course.CoursePage"
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
      "http://127.0.0.1:8000/api/v2/pages/?type=university.UniversityPage"
    );
    const destinations = response.data.items;

    const destinationData = await Promise.all(
      destinations.map(async (destination) => {
        const detailedData = await fetchDestinationDetails(
          destination.meta.detail_url
        );
        console.log("Univer", detailedData);
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
