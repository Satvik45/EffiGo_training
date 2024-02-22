import axios from "axios";

const API_BASE_URL = "http://localhost:3000"; // Replace with your actual API base URL

const authService = {
  login: async (email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/posts`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Login failed. Please check your credentials.");
    }
  },

  signup: async (name, email, password) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      throw new Error("Signup failed. Please try again later.");
    }
  },
};

export default authService;
