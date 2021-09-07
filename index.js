const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`[
    {
      "name": "John Doe",
      "email": "john.doe@gmail.com"	
    },
    {
      "name": "Michael Jackson",
      "email": "michael.jackson@yahoo.com"	
    }, 
    {
      "name": "John Doe",
      "email": "john.doe@gmail.com"	
    },
    {
      "name": "Michael Jackson",
      "email": "michael.jackson@yahoo.com"	
    } 
  ]`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
