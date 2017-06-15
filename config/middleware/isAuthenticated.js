// This is middleware for restrictng routes a owner is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the owner is logged in, continue with the request to the restricted route
  if (req.owner) {
    return res.redirect("/home");
  }

  // If the owner isnt' logged in, redirect them to the login page
  return res.redirect("/");
};
