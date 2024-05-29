import axios from "axios";

export const fetchdata=async (state, city)=>{
    try {
        const response = await axios.get(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        return response.data
      } catch (error) {
        console.error(error);
      }
}