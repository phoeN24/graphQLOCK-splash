const path = require('path');
const express = require('express');
const { Router } = require('express');
const app = express();
const router = require('./routers')

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../src')));

//define route handler
app.use('/routers', router)

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('Page not found'));

//global error handler
app.use((err, req,res,next) =>{
  const defaultErr = {
    log: 'Global Error Handler caught unknown middleware error',
    status: 500,
    message: {Error: 'Unknown error'},
  };
  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);
  return res.status(errObj.status).json(errObj.message);
});


const PORT = 3000;
app.listen(PORT, () =>{
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;