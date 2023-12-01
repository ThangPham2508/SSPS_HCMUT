import passport from "../passport-setup.js";

const login = passport.authenticate("google", {
  scope: ["email", "profile"],
});

const callback = [
  passport.authenticate("google", {
    failureRedirect: "/auth/failure",
    successRedirect: "http://localhost:5173",
    session: true,
  })
];

const logout = (req, res, next) => {
  console.log("logging out", req.user);
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    console.log("logged out", req.user);
    res.redirect("http://localhost:5173");
  });
};

const failure = (req, res) => {
  return res.send("Failed to log in!");
};

export { login, callback, logout, failure };
