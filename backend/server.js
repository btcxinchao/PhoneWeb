const express = require('express')
require('dotenv').config();
const app = express()
const cors = require('cors');

const indexRoutes = require('./src/routes/index_roures');
indexRoutes(app);

const port = process.env.PORT 

const ConnectDB = require('./src/config/ConnectDB');
ConnectDB();

app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',   // địa chỉ React
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(express.json());

app.get('/api/user/login', (req, res) => {
  res.send('Trang đăng nhập  !')
})
app.get('/api/user/register', (req, res) => {
  res.send('Trang đăng ký !')
})




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
