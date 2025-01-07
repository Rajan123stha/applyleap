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
