const Users = require("../models/users");

exports.get_login = (req, res, next) => {
  res.render("login", {
    active: "login",
    session: req.session,
    messages: req.flash(),
  });
};

exports.session = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const [user, metadata1] = await Users.login(email, password);
    const [firstName, metadata2] = await Users.getName(user[0].IdUser);

    const sessionData = req.session;

    sessionData.IdUser = user[0].IdUser;
    sessionData.firstName = firstName[0].firstName;

    req.flash("success", "¡Inicio de sesión exitoso!");

    res.redirect("/");
  } catch (error) {
    req.flash("error", "Nombre de usuario o contraseña incorrectos");

    console.error("Error al obtener el usuario:", error);
    res.redirect("/login");
  }
};

exports.logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
