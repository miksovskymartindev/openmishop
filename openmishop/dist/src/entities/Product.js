"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InStock;
(function (InStock) {
    InStock[InStock["NOT_IN_STOCK"] = 0] = "NOT_IN_STOCK";
    InStock[InStock["LESS_THAN_FIVE"] = 1] = "LESS_THAN_FIVE";
    InStock[InStock["FIVE_TO_TEN"] = 2] = "FIVE_TO_TEN";
    InStock[InStock["MORE_THAN_TEN"] = 3] = "MORE_THAN_TEN";
    InStock[InStock["UNKNOWN"] = 4] = "UNKNOWN";
})(InStock = exports.InStock || (exports.InStock = {}));
var ExpeditionTime;
(function (ExpeditionTime) {
    ExpeditionTime[ExpeditionTime["TODAY"] = 0] = "TODAY";
    ExpeditionTime[ExpeditionTime["TOMMOROW"] = 1] = "TOMMOROW";
    ExpeditionTime[ExpeditionTime["IN_THREE_DAYS"] = 2] = "IN_THREE_DAYS";
    ExpeditionTime[ExpeditionTime["ONE_WEEK"] = 3] = "ONE_WEEK";
    ExpeditionTime[ExpeditionTime["ONE_MONTH"] = 4] = "ONE_MONTH";
    ExpeditionTime[ExpeditionTime["UNKNOWN"] = 5] = "UNKNOWN";
})(ExpeditionTime = exports.ExpeditionTime || (exports.ExpeditionTime = {}));
class Product {
    constructor(id, name, shortDescription, price, images, categoryID, description, variations, rating, inStock, expeditionTime, discount, taxID, productCode, stockCode, weight, size) {
        this.id = id;
        this.name = name;
        this.shortDescription = shortDescription;
        this.description = description;
        this.images = images;
        this.categoryID = categoryID;
        this.variations = variations;
        this.price = price;
        this.rating = rating;
        this.inStock = inStock === undefined ? InStock.UNKNOWN : inStock;
        this.expeditionTime = expeditionTime === undefined ? ExpeditionTime.UNKNOWN : expeditionTime;
        this.discount = discount === undefined ? 0 : discount;
        this.taxID = taxID;
        this.productCode = productCode;
        this.stockCode = stockCode;
        this.weight = weight;
        this.size = size;
        this.updatedAt = Date.now().toLocaleString();
        this.createdAt = Date.now().toLocaleString();
    }
}
exports.default = Product;
//# sourceMappingURL=Product.js.map