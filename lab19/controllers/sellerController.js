const Users = require("../models/users");

exports.get_sell = async (req, res, next) => {
  const IdUser = req.session.IdUser;
  const role = req.session.role;

  if (IdUser) {
    if (role === 2) {
      const [privileges, metadata] = await Users.getPrivileges(role);

      const sellProduct = privileges.filter(
        (priv) => priv.descriptionPrivilege === "Sell Product"
      );

      if (sellProduct) {
        res.render("sell", {
          active: "sell",
          session: req.session,
          messages: req.flash(),
        });
      } else {
        res.redirect("/");
      }
    } else {
      res.render("registerSeller", {
        active: "sell",
        session: req.session,
        messages: req.flash(),
      });
    }
  } else {
    res.redirect("/");
  }
};

exports.register_seller = async (req, res, next) => {
  const phone = req.body.phone;
  const address = req.body.address;
  const IdUser = req.session.IdUser;
  const role = req.session.role;

  if (role !== 2) {
    Users.setSellerRole(IdUser)
      .then(Users.createSeller(IdUser, phone, address))
      .catch((error) => {
        console.error(error);
      });

    const sessionData = req.session;
    sessionData.role = 2;
  } else {
    res.render("sell", {
      active: "sell",
      session: req.session,
      messages: req.flash(),
    });
  }

  res.redirect("/");
};

exports.logout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
