let express = require('express');
const app = express()

// Endpoints
app.get('/', (req, res) => {
    res.send("Hello WOrld")
})

// Server Listening
let PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`Server running on localhost://${PORT}`)
})