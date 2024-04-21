const connectm=require('./db'); 
const express = require('express')
var cors = require('cors')
const app = express()
const port = 5000



app.use(cors({
  origin:['https://noteinfinity.vercel.app', 'http://localhost:3000'],
  methods:['GET', 'POST', 'DELETE', 'PUT']
}))
app.use(express.json())

app.use('/api/check',require('./routes/check'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectm(); 