exports.get_services = async (req, res, next) => {
  res.render("services", {
    session: req.session,
    active: "client",
  });
};
