const express = require('express');
const app = express();
const port = 8080;
const expressLayouts = require('express-ejs-layouts');
//use express-ejs-layouts
app.use(expressLayouts);
//extract style and scripts from sub pages into layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);
//use the static files from assets folder
app.use(express.static('assets'));
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