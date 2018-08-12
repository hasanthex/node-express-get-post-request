const express = require('express');
const app     = express();

// GET request to the root directory.
// Request URL:  http://localhost:7000
app.get('/', (req, res)=>{
    res.send('Hello World');
});

// Request URL:  http://localhost:7000/home
app.get('/home', (req, res)=>{
    res.send('Home Content');
});

// Request URL:  http://localhost:7000/about
app.get('/about', (req, res)=>{
    res.send('About Content');
});

// Take parameter using URL.
// Request URL: http://localhost:7000/blog/1/demo
app.get('/blog/:id/:name', (req, res)=>{
    res.send(req.params);
});

// Take Query parameter using URL.
// Request URL: http://localhost:7000/article/1/demo?sortby=given-name
// OR: http://localhost:7000/article/10/test?another=given-name
app.get('/article/:id/:name', (req, res)=>{
    let data = [{
        'id'    : req.params.id, 
        'name'  : req.params.name,
        'query' : req.query
    }]
    res.send(data);
});

// set server port number to 7000
const port = process.env.port || 7000;

app.listen(port, () => console.log(`Server Running On Port ${port}...`));
