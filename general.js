const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Get all books
exports.getAllBooks = async () => {
  const response = await axios.get(`${BASE_URL}/`);
  return response.data;
};

// Get book by ISBN
exports.getBookByISBN = async (isbn) => {
  const response = await axios.get(`${BASE_URL}/isbn/${isbn}`);
  return response.data;
};

// Get books by author
exports.getBooksByAuthor = async (author) => {
  const response = await axios.get(`${BASE_URL}/author/${author}`);
  return response.data;
};

// Get books by title
exports.getBooksByTitle = async (title) => {
  const response = await axios.get(`${BASE_URL}/title/${title}`);
  return response.data;
};
