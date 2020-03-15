import { IProduct } from '@entities/Product';


export interface IProductDao {
    getOne: (id: number) => Promise<IProduct | null>;
    getAll: () => Promise<IProduct[]>;
    add: (product: IProduct) => Promise<void>;
    update: (product: IProduct) => Promise<void>;
    delete: (id: number) => Promise<void>;
}

class ProductDao implements IProductDao {


    /**
     * @param email
     */
    public async getOne(id: number): Promise<IProduct | null> {
        // TODO
        return [] as any;
    }


    /**
     *
     */
    public async getAll(): Promise<IProduct[]> {
        // TODO
        return [] as any;
    }


    /**
     *
     * @param user
     */
    public async add(product: IProduct): Promise<void> {
        // TODO
        return {} as any;
    }


    /**
     *
     * @param user
     */
    public async update(product: IProduct): Promise<void> {
        // TODO
        return {} as any;
    }


    /**
     *
     * @param id
     */
    public async delete(id: number): Promise<void> {
        // TODO
        return {} as any;
    }
}

export default ProductDao;
