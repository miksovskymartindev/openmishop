"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductVariation {
    constructor(variationName, id, description, images, addFixedPrice, multiplyPrice) {
        this.id = id;
        this.variationName = variationName;
        this.description = description;
        this.images = images;
        this.addFixedPrice = addFixedPrice;
        this.multiplyPrice = multiplyPrice;
    }
}
exports.default = ProductVariation;
