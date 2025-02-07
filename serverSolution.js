const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('Request received. Processing in background...');

  // Simulate a long-running operation
  setTimeout(() => {
    let count = 0;
    for (let i = 0; i < 1000000; i++) {
      count++;
    }
    console.log('Long-running operation completed');
  }, 0);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});