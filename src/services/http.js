import axios from 'axios';

export default {
  search: async (searchTerm) => {
    let res = await axios.get(`http://localhost:3000/api/search?q=${searchTerm}`);
    return res.data; 
  }
}