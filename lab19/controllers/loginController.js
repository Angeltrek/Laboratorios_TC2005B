const Users = require("../models/users");

exports.get_login = async (req, res, next) => {
  res.render("login", {
    active: "login",
    session: req.session,
    messages: req.flash(),
  });
};

exports.get_register = async (req, res, next) => {
  res.render("register", {
    active: "register",
    session: req.session,
    messages: req.flash(),
  });
};

exports.send_register = async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const gender = req.body.gender;
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  Users.createUser(firstName, lastName, age, gender, email, username, password)
    .then(() => {
      return Users.setRole(email, 1);
    })
    .then(() => {
      console.log("Usuario creado y rol asignado correctamente.");
    })
    .catch((error) => {
      console.error("Error al crear usuario o asignar rol:", error);
    });
  res.redirect("/");
};

exports.session = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const IdUser = await Users.login(email, password);
    const [Role, metadata1] = await Users.getRole(IdUser);
    const [firstName, metadata2] = await Users.getName(IdUser);

    const sessionData = req.session;

    sessionData.IdUser = IdUser;
    sessionData.firstName = firstName[0].firstName;
    sessionData.role = Role[0].IdRole;

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
