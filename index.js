// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// app.get("/api/:time",(req,res)=>{
//   const time = req.params.time;
//   const dateObj = new Date(time);
//   res.send("Hello I am here"+dateObj.getTime());
//   const utcString = dateObj.toUTCString();

//     const result = {
//       unix: unixTimestamp,
//       utc: utcString
//     };
// });


// your first API endpoint... 
app.get("/api/:time", function (req, res) {

  const time = req.params.time;
 let result ={};
  if(time[4]=='-'){
    const udate = new Date(time);
    const utimestrap = udate.getTime();
    const uts =udate.toUTCString();


     result = {
      unix : utimestrap,
      utc: uts
    }
  }else{
    const udate = new Date(time*1);

    // Format the date to the UTC string
    const utimestrap = udate.toUTCString();
    
    // Create the JSON object with the desired properties
     result = {
      unix: time*1,
      utc: utimestrap
    };

  }

  res.send(result);
  //res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
