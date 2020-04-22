const Product = require("../models/product");
const User = require("../models/user");
const axios = require("axios");
const cheerio = require("cheerio");

exports.getProfile = (req, res, next) => {
    User.findById(req.query.userId).then(user => {
        if (user) {
            return res.status(200).json({
                user,
                success: true
            })
        } else {
            return res.status(404).json({
                error: "User not found"
            })
        }
    }).catch(err => {
        return res.status(500).json({
            error: err
        })
    })
}

exports.postProfile = (req, res, next) => {
    const productUri = req.body.uri;
    const results = scraper(productUri);
    const productTitle = results.title;
    const productPrice = results.price;
    console.log(productTitle);
    console.log(productPrice);
    let creator;
    const newProduct = new Product({
        uri: productUri,
        title: productTitle,
        price: productPrice,
        creator: req.userId
    });
    newProduct.save().then(result => {
        return User.findById(req.userId);
    }).then(user => {
        creator = user;
        user.posts.push(post);
        return user.save();
    }).then(result => {
        res.status(201).json({
            message: 'Product added to users profile successfully!',
            product: newProduct,
            creator: {
                _id: creator._id,
                name: creator.username
            }
        });
    })
}

async function scraper(uri) {
    const html = await axios.get(uri).then(res => {
        return res.data;
    });
    const $ = cheerio.load(html);
    const title = $("#productTitle").text().trim();
    const regularPrice = $('#priceblock_ourprice').text().trim().replace(/^[0-9\.]/g, '').match(/\d+(.)([0-9])+/);
    const dealPrice = $('#priceblock_dealprice').text().trim().replace(/^[0-9\.]/g, '').match(/\d+(.)([0-9])+/);
    var price = undefined;
    try {
        if (dealPrice !== null) {
            price = parseFloat(dealPrice[0]);
        } else if (regularPrice !== null) {
            price = parseFloat(regularPrice[0]);
        }
    } catch (err) {
        console.log(err);
    }
    const results = {
        title: title,
        price: price
    }
    return results;
}