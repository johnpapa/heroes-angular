const express = require('express');
const app = express();
const port = process.env.PORT || 9626;
const publicweb = process.env.PUBLICWEB || './'; //'./dist/heroes-angular';

const start = () => {
  app.use(express.static(publicweb));
  console.log(`serving ${publicweb}`);
  app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: publicweb });
  });
  app.listen(port, () => console.log(`listening on http://localhost:${port}`));
};

start();
