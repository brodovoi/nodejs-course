import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  const filePaath = './files/index.html';
  //   With streams
  if (req.url === '/' && req.method === 'GET') {
    const readStream = fs.createReadStream(filePaath);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    readStream.pipe(res);
  }
  //   Without streams. We read entire file and then send it to the client
  if (req.url === '/no-stream' && req.method === 'GET') {
    fs.readFile(filePaath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('error reading file on server');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      }
    });
  }
});

server.listen(5000, () => {
  console.log('Server is listening at port 5000');
});
