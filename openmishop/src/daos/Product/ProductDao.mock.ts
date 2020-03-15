import { MockDaoMock } from '../MockDb/MockDao.mock';
import { IProductDao } from './ProductDao';
import Product, { IProduct, InStock, ExpeditionTime } from '@entities/Product';
import ProductVariation from '@entities/ProductVariation';


class ProductDao extends MockDaoMock implements IProductDao {


    public async getOne(id: number): Promise<IProduct | null> {
        try {
            const db = await super.openDb();
            return db.products.array.find((product: { id: number; }) => product.id === id);

        } catch (err) {
            throw err;
        }
    }


    public async getAll(): Promise<IProduct[]> {
        try {
            const db = await super.openDb();
            return db.products;
        } catch (err) {
            throw err;
        }
    }


    public async add(product: IProduct): Promise<void> {
        try {
            const db = await super.openDb();
            db.products.push(product);
            await super.saveDb(db);
        } catch (err) {
            throw err;
        }
    }


    public async update(product: IProduct): Promise<void> {
        try {
            const db = await super.openDb();
            for (let i = 0; i < db.users.length; i++) {
                if (db.products[i].id === product.id) {
                    db.products[i] = product;
                    await super.saveDb(db);
                    return;
                }
            }
            throw new Error('User not found');
        } catch (err) {
            throw err;
        }
    }


    public async delete(id: number): Promise<void> {
        try {
            const db = await super.openDb();
            for (let i = 0; i < db.products.length; i++) {
                if (db.products[i].id === id) {
                    db.products.splice(i, 1);
                    await super.saveDb(db);
                    return;
                }
            }
            throw new Error('User not found');
        } catch (err) {
            throw err;
        }
    }
}

export default ProductDao;
