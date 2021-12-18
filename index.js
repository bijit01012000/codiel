const express = require('express');
const app = express();
const port = 8080;
//use express router

app.use('/',require('./routes/index'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port,function(err)
{
    if(err)
    {
        console.log(err);
        console.log(`error running the server: ${err}`);

    }
    console.log(`server is running on port ${port}`);
});