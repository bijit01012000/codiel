module.exports.profile = function(req,res)
{
    return res.render('profile',{
        title:"profile",
        user_name:"bijit",
        user_age:"22"});
};

module.exports.post = function(req,res)
{
    res.end('<h1>Post</h1>');
}