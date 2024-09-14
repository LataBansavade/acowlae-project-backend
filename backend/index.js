const express = require('express')
const dotenv = require('dotenv');
const newsRoutes = require('./routes/newsRoute')
const cors = require('cors');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 7000;

app.use(cors());
app.use(express.json());

app.use('/api/news', newsRoutes);
  
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});