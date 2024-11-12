const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config();


const app = express()
const port = process.env.PORT || 3000;


// use middleware 
app.use(cors());
app.use(morgan('dev'));


// home root
app.get('/', (req, res) => {
  res.send('Human-Resource-Server-API')
})







app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})