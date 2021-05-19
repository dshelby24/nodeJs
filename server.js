// const http = require('http');
// const server = http.createServer((req, res) =>{
 
//     console.log('first',req.url, 'second', req.methodnode);
//     res.setHeader('Content-Type', 'text/plain')
    
    
//     res.write("<head><link rel = 'stylesheet' hred=\"#\" </head>");

//     res.write('<h1>Hello Cicadas</h1>');
//     res.write('<p>Hello Cicadas</p>');
//     res.end();
// });

  // fs.readFile('./views/index.html', (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end();
  //   }
  //   //res.write(data);
  //   res.end(data);
  // });



// server.listen(3000, 'localhost', ()=> {
//     console.log('listening for request on port 3000')
// });


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

  console.log(req.url, req.method);


  res.setHeader('Content-Type', 'text/html');


  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
  }

//   send an html files
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });


});


server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});
