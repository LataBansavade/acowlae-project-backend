const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.GNEWS_API_KEY;
const baseUrl = 'https://gnews.io/api/v4/search';

const searchController = async (req, res) => {
  const { query, region, category } = req.query; // Extract query parameters
  try {
    // Construct the API request URL with the provided parameters
    const url = `${baseUrl}?q=${encodeURIComponent(query || '')}&lang=en&country=${region || 'us'}&category=${category || ''}&max=10&apikey=${apiKey}`;
    
    // Make the API request
    const response = await axios.get(url);
    
    // Send the response data to the client
    res.json(response.data); 
    console.log(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching news');
  }
};

module.exports = { searchController };
