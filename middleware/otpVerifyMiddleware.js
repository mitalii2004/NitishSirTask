module.exports = {

    otpMiddleware: async (req, res, next) => {
        if (req.session.otpVerified) {
            next();
        } else {
            console.log(req.originalUrl);
            res.redirect(`/otpVerify?from=${req.originalUrl}`);
        }
    }
    
}