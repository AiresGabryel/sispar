const { createServer } = require('vite');

const port = process.env.PORT || 4173;

createServer({
  preview: {
    port,
    host: '0.0.0.0'
  }
}).then(server => {
  server.preview.listen(port, () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
  });
});