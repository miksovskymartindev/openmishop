"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const MockDao_mock_1 = require("../MockDb/MockDao.mock");
class ProductDao extends MockDao_mock_1.MockDaoMock {
    getOne(id) {
        const _super = Object.create(null, {
            openDb: { get: () => super.openDb }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield _super.openDb.call(this);
                return db.products.array.find((product) => product.id === id);
            }
            catch (err) {
                throw err;
            }
        });
    }
    getAll() {
        const _super = Object.create(null, {
            openDb: { get: () => super.openDb }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield _super.openDb.call(this);
                return db.products;
            }
            catch (err) {
                throw err;
            }
        });
    }
    add(product) {
        const _super = Object.create(null, {
            openDb: { get: () => super.openDb },
            saveDb: { get: () => super.saveDb }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield _super.openDb.call(this);
                db.products.push(product);
                yield _super.saveDb.call(this, db);
            }
            catch (err) {
                throw err;
            }
        });
    }
    update(product) {
        const _super = Object.create(null, {
            openDb: { get: () => super.openDb },
            saveDb: { get: () => super.saveDb }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield _super.openDb.call(this);
                for (let i = 0; i < db.users.length; i++) {
                    if (db.products[i].id === product.id) {
                        db.products[i] = product;
                        yield _super.saveDb.call(this, db);
                        return;
                    }
                }
                throw new Error('User not found');
            }
            catch (err) {
                throw err;
            }
        });
    }
    delete(id) {
        const _super = Object.create(null, {
            openDb: { get: () => super.openDb },
            saveDb: { get: () => super.saveDb }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const db = yield _super.openDb.call(this);
                for (let i = 0; i < db.products.length; i++) {
                    if (db.products[i].id === id) {
                        db.products.splice(i, 1);
                        yield _super.saveDb.call(this, db);
                        return;
                    }
                }
                throw new Error('User not found');
            }
            catch (err) {
                throw err;
            }
        });
    }
}
exports.default = ProductDao;
