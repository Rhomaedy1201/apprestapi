const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse palication/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// paggil routers
var routers = require('./routers');
routers(app);

app.listen(4000, () => {
  console.log(`Server started on port`);
});
