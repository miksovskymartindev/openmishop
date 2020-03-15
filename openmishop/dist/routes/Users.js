"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const ProductDao_mock_1 = tslib_1.__importDefault(require("@daos/Product/ProductDao.mock"));
const constants_1 = require("@shared/constants");
const router = express_1.Router();
const userDao = new ProductDao_mock_1.default();
router.get('/all', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const product = yield userDao.getAll();
    return res.status(http_status_codes_1.OK).json({ users: product });
}));
router.post('/add', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { product } = req.body;
    if (!product) {
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: constants_1.paramMissingError,
        });
    }
    yield userDao.add(product);
    return res.status(http_status_codes_1.CREATED).end();
}));
router.put('/update', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { user: product } = req.body;
    if (!product) {
        return res.status(http_status_codes_1.BAD_REQUEST).json({
            error: constants_1.paramMissingError,
        });
    }
    product.id = Number(product.id);
    yield userDao.update(product);
    return res.status(http_status_codes_1.OK).end();
}));
router.delete('/delete/:id', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    yield userDao.delete(Number(id));
    return res.status(http_status_codes_1.OK).end();
}));
exports.default = router;
