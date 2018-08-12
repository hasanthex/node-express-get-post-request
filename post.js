const express = require('express');
const app     = express();

// This line is required for taking POST request.
app.use(express.json());

// Store all albums name into this array.
var albums = [];

// @request POST
// @desc Add new album name into the albums array.
// @params JSON 
app.post('/album/add', (req, res)=>{

    const album = {
        'id'    : albums.length + 1,
        'name'  : req.body.name
    };
    
    albums.push(album);
    console.log(albums)
    res.send(album.name);
});

// @reques POST
// @desc Get all albums information.
// @params 
app.post('/albums', (req, res)=>{
    res.send(albums);
});

// set server port number to 7000
const port = process.env.port || 7000;

app.listen(port, () => console.log(`Server Running On Port ${port}...`));
