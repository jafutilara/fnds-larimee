const mongoose = require("mongoose");

var ProductSchema = mongoose.Schema({
    color: {
        type: String
    },
    size: {
        type: String
    },
    price: {
        type: Number
    },
    material: {
        type: String
    },
    available: {
        type: String
    },
    quantity: {
        type: String
    }
});
var Products = module.exports = mongoose.model('Products', ProductSchema);
