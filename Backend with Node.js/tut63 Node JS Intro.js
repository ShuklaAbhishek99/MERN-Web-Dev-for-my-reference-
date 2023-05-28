// console.log("Hello World")
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
//   res.end('Hello World');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Before and After Pseudo Selectors</title>
      <style>
          body{
              margin: 0;
              padding: 0;
              background-color: black;
              color: white;
          }
  
          /* Technique used for good image and text balance */
          header::before{
              background: url(./pic2.jpg) no-repeat center/cover;
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              opacity: 0.3;
              width: 100%;
              height: 100%;
              z-index: -1;
          }
  
          .navigation{
              font-size: 23px;
              display: flex;
          }
          
          li{
              list-style: none;
              padding: 6px 23px;
          }
          section{
              height: 344px;
              /* ye vertically center me kar dega */
              justify-content: center;
              /* border: 2px solid red; */
              margin: 3px 23px;
              display: flex;
              flex-direction: column;
              align-items: center;
          }
  
          /* before and after Pseudo Selector, ye us attribute ya element k baad insert ho jayega screen me */
          /* section::before{
              content: "this is before content";
          }
  
          section::after{
              content: "this is after content";
          } */
  
          h1{
              font-size: 4rem;
          }
  
          p{
              text-align: center;
          }
          </style>
  </head>
  <body>
      <header>
          <nav class="navbar">
              <ul class="navigation">
                  <li class="item">Home</li>
                  <li class="item">About</li>
                  <li class="item">Services</li>
                  <li class="item">Contact Us</li>
              </ul>
          </nav>
      </header>
      <section>
          <h1>Welcome To Coding World</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet illo minima magnam velit soluta, ipsa quae sit alias. Impedit laborum necessitatibus possimus earum, quia voluptatibus aspernatur adipisci quidem delectus eaque?</p>
      </section>
      <!-- <hr> -->
  
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});