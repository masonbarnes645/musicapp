import axios from "axios";

export const fetchChart = async () => {
  try {
    const res = await axios.get('http://127.0.0.1:5000/api/chart');  
    console.log(res.data);  
    return res.data; 
  } catch (error) {
    console.error("Error fetching chart data:", error.message);
    throw new Error("Failed to fetch chart");
  }
};
