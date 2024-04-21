const connectm=require('./db'); 
const express = require('express')
const dotenv  = require('dotenv')
var cors = require('cors')
const app = express()
const port = 5000
dotenv.configDotenv()



app.use(cors())
app.get('/', (req, res) => {
  res.send('hi')
})
app.use(express.json())

app.use('/api/check',require('./routes/check'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectm(); 