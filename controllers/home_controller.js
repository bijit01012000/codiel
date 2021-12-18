module.exports.home = function(req,res)
{
    return res.end('<h1>Hello World</h1>');
}
module.exports.login = function(req,res)
{
    return res.end('<h1>Login</h1>');
}

