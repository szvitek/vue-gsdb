import axios from 'axios';

export default {
  search: async (searchTerm) => {
    let res = await axios.get(`http://localhost:3000/api/search?q=${searchTerm}`);
    return res.data; 
  },

  getDetails: async (id) => {
    let res = await axios.get(`http://localhost:3000/api/shows/${id}`);
    return res.data; 
  }
}