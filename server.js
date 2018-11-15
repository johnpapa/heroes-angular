const express = require('express');
const app = express();
const port = process.env.PORT || 7626;
const publicweb = process.env.PUBLICWEB || './public';

const captains = console;

const start = () => {
  app.use(express.static(publicweb));
  captains.log(`serving ${publicweb}`);
  app.get('*', (req, res) => {
    res.sendFile(`index.html`, { root: publicweb });
  });
  app.listen(port, () => captains.log(`listening on http://localhost:${port}`));
};

start();
