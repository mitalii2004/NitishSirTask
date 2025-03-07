const Models = require("../models/index");
const bcrypt = require("bcrypt");

module.exports = {

    dashboard: async (req, res) => {
        try {
            const title = "Dashboard";

            const userCount = await Models.userModel.count();
            const contactCount = await Models.contactUsModel.count();
            const productCount = await Models.productModel.count();

            res.render("dashboard", {
                title,
                userCount,
                contactCount,
                productCount,
            });
        } catch (error) {
            console.error("Error fetching dashboard data:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    otpVerify: async (req, res) => {
        try {
            console.log(req.query, "req.query")
            req.session.otp = "1111";
            res.render("otpVerify", { page: req.query.from });
        } catch (error) {
            console.error("Error in OTP verification page:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    otpVerifyDone: async (req, res) => {
        try {
            console.log(req.query.page, "req.query.page")
            let otp = `${req.body.otp1}${req.body.otp2}${req.body.otp3}${req.body.otp4}`;
            if (!otp) {
                return res.status(400).send("OTP is required");
            }
            console.log("Final OTP:", otp);
            if (otp !== req.session.otp) {
                return res.status(400).send("Invalid OTP");
            }
            req.session.otpVerified = true;
            const redirectTo = req.session.previousPage || "/users";
            console.log("Redirecting to:", redirectTo);
            delete req.session.previousPage;
            res.redirect(req.query.page);
        } catch (error) {
            console.error("Error in OTP verification:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    users: async (req, res) => {
        try {
            console.log(req.session);
            const title = "Users";
            const userData = await Models.userModel.findAll();
            res.render("users/userListing", { title, userData });
        } catch (error) {
            console.error("Error fetching users:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    addUser: async (req, res) => {
        try {
            const title = "Users";
            res.render("users/addUserListing", { title });
        } catch (error) {
            console.error("Error in addUser:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    createUser: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).send("Email and Password are required");
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await Models.userModel.create({
                email,
                password: hashedPassword,
            });

            res.redirect("/users");
        } catch (error) {
            console.error("Error creating user:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    contactUs: async (req, res) => {
        try {
            const title = "ContactUs";
            const contactData = await Models.contactUsModel.findAll();
            res.render("contactUs/contactUsListing", { title, contactData });
        } catch (error) {
            console.error("Error fetching contactUs data:", error);
            res.status(500).send("Internal Server Error");
        }
    },

    product: async (req, res) => {
        try {
            const title = "Product";
            const productData = await Models.productModel.findAll();
            res.render("product/productListing", { title, productData });
        } catch (error) {
            console.error("Error fetching product data:", error);
            res.status(500).send("Internal Server Error");
        }
    },

};
