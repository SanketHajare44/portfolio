import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getPortfolioStatus = async () => {
    const response = await axios.get(`${API_BASE_URL}/status`);

    return response.data;
};

export const getProjects = async () => {
    const response = await axios.get(`${API_BASE_URL}/projects`);

    return response.data;
};