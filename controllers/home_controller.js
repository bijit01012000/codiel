module.exports.home = function(req,res)
{
    return res.render('home',{
        title:"home"
    });
}
module.exports.login = function(req,res)
{
    return res.end('<h1>Login</h1>');
}

