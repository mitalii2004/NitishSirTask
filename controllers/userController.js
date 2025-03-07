// const Models = require("../models/index");
// const bcrypt = require("bcrypt")

// module.exports = {

//     users: async (req, res) => {
//         try {
//             const title = "Users";
//             const userData = await Models.userModel.findAll();
//             res.render("users/userListings", { title, userData });
//         } catch (error) {
//             throw error
//         }
//     },

//     contactUs: async (req, res) => {
//         try {
//             const title = "ContactUs";
//             const contactData = await Models.contactUsModel.findAll();
//             res.render("contactUs/contactUsListings", { title, contactData });
//         } catch (error) {
//             throw error
//         }
//     },

//     product: async (req, res) => {
//         try {
//             const title = "Product";
//             const productData = await Models.productModel.findAll();
//             res.render("product/productListings", { title, productData });
//         } catch (error) {
//             throw error
//         }
//     },

// }