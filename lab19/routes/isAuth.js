module.exports = async (req, res, next) => {
  if (!req.session.IdUser) {
    return res.redirect("/");
  }

  next();
};
