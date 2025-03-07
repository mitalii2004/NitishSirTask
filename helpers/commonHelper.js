module.exports = {

  session: async (req, res, next) => {
    if (req.session.user) {
      next();
    } else {
      return res.redirect("/");
    }
  },
  
  storePreviousPage: (req, res, next) => {
    if (!req.session.otpVerified) {
        if (!req.session.previousPage && req.originalUrl !== "/otpVerify") {
            req.session.previousPage = req.originalUrl;
            console.log("Stored previous page:", req.session.previousPage);
        }
        return res.redirect("/otpVerify");
    }
    next();
}

};
