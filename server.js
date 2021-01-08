const express = require('express');

const cfenv = require('cfenv');

const path = require('path');

const { port, bind, url } = cfenv.getAppEnv();

const app = express();

app.use('/', express.static(path.join(__dirname, 'dist')));

app.listen(port, bind, () =>
  console.log(`server started on port ${port} \n ${url}`)
);
