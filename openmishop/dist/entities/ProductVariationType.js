"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductVariationType {
    constructor(typeName, variations, id, images, addFixedPrice, multiplyPrice) {
        this.id = id;
        this.typeName = typeName;
        this.images = images;
        this.variations = variations;
        this.addFixedPrice = addFixedPrice;
        this.multiplyPrice = multiplyPrice;
    }
}
exports.default = ProductVariationType;
