const express = require('express');
const path = require('path');
const app = express()

// app.get("/", (req, res) => {
//     res.send(`Welcome Node.js Server Root : http://localhost:${PORT}`);
// })

app.get("/api/greeting/", (req, res) => {
    res.send({ title     : 'Hello World from Node!!'
             , subTitle  : 'Node x React'
             , paragraph : 'paragraph'
            });
    //res.send("Hello World!");
});

// if (process.env.NODE_ENV === 'production') {
//     // Serve any static files
//     app.use(express.static(path.join(__dirname, 'client/build')));

//     // Handle React routing, return all requests to React app
//     app.get('*', function(req, res) {
//       res.sendFile(path.join(__dirname, 'client/build/index.html'));
//     });
//   }

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})

//app.listen(PORT);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Node.js Server is running on http://localhost:${PORT}`);
  });