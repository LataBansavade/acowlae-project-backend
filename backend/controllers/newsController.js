  const axios = require('axios');
  require('dotenv').config();

 const apiKey = process.env.GNEWS_API_KEY
 const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey='

 const newsController = async (req, res) => {
    try {
      const response = await axios.get(url + apiKey);
      res.send(response.data); 
      // console.log(response.data);
    } catch (error) {
      console.log(error);
      res.status(500).send('Error fetching news');
    }
  };
  
module.exports= {newsController}
