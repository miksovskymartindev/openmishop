import { IProductVariation as IProductVariationType } from './ProductVariation';

export interface ProductSize {
    x: number;
    y: number;
    z: number;
}

export enum InStock {
    NOT_IN_STOCK,
    LESS_THAN_FIVE,
    FIVE_TO_TEN,
    MORE_THAN_TEN,
    UNKNOWN
}

export enum ExpeditionTime {
    TODAY,
    TOMMOROW,
    IN_THREE_DAYS,
    ONE_WEEK,
    ONE_MONTH,
    UNKNOWN
}

export interface IProduct {
    id: number;
    name: string;
    shortDescription: string;
    description: string | undefined;
    images: string[];
    categoryID: number;
    variationTypes: IProductVariationType[] | undefined;
    price: number;
    rating: number | undefined;
    inStock: InStock | undefined;
    expeditionTime: ExpeditionTime | undefined;
    discount: number | undefined;
    taxID: number | undefined;
    productCode: string | undefined;
    stockCode: string | undefined;
    weight: number | undefined;
    size: ProductSize | undefined;
    updatedAt: string;
    createdAt: string;
}

class Product implements IProduct {
    id: number;
    name: string;
    shortDescription: string;
    description: string | undefined;
    images: string[];
    categoryID: number;
    variationTypes: IProductVariationType[] | undefined;
    price: number;
    rating: number | undefined;
    inStock: InStock | undefined;
    expeditionTime: ExpeditionTime | undefined;
    discount: number | undefined;
    taxID: number | undefined;
    productCode: string | undefined;
    stockCode: string | undefined;
    weight: number | undefined;
    size: ProductSize | undefined;
    updatedAt: string;
    createdAt: string;

    constructor(id: number, name: string, shortDescription: string, price: number, images: string[], categoryID: number, description?: string, 
        variationTypes?: IProductVariationType[], rating?: number, inStock?: InStock, expeditionTime?: ExpeditionTime, 
        discount?: number, taxID?: number, productCode?: string, stockCode?: string, weight?: number, size?: ProductSize) {   
            
            this.id = id;
            this.name = name;
            this.shortDescription = shortDescription;
            this.description = description;
            this.images = images;
            this.categoryID = categoryID;
            this.variationTypes = variationTypes;
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
            this.updatedAt = new Date().toUTCString();
            this.createdAt = new Date().toUTCString();
            
    }
    
}

export default Product;





/*

new Product(
    1,
    'Test Product',
    'Short description of Test Product',
    10.99,
    [
        'https://scontent-prg1-1.xx.fbcdn.net/v/t1.15752-9/89833591_228502251606012_8627280810107469824_n.jpg?_nc_cat=103&_nc_sid=b96e70&_nc_oc=AQmdFozE4-Y_qAUKRvS7S0JSrKSTT0son8yVN6tOV96U03UEKlQz7gxO-Hl2h7twHdqACjo5gufDIWuIJYWmEIo1&_nc_ht=scontent-prg1-1.xx&oh=5085baeff3603a66677c2eb086aa009c&oe=5E9432D7',
        'https://scontent-prg1-1.xx.fbcdn.net/v/t1.15752-9/89920840_670532723756253_8588090457597149184_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_oc=AQliSwhFSu6tlfRA9OkvmxsUCYZShW6FeOSS9OYqgM0mhczWPBxR84jbL229kbJOgnssLBJgdS16fncbDMxCjB6F&_nc_ht=scontent-prg1-1.xx&oh=f22091b69f48e27b5795b9b151c46776&oe=5E943710'
    ],
    1,
    'Long description of Test Product Long description of Test Product Long description of Test Product Long description of Test Product Long description of Test Product Long description of Test Product Long description of Test Product Long description of Test Product',
    [
        {
            typeName: 'color',
            images: [
                'https://scontent-prg1-1.xx.fbcdn.net/v/t1.15752-9/89920840_670532723756253_8588090457597149184_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_oc=AQliSwhFSu6tlfRA9OkvmxsUCYZShW6FeOSS9OYqgM0mhczWPBxR84jbL229kbJOgnssLBJgdS16fncbDMxCjB6F&_nc_ht=scontent-prg1-1.xx&oh=f22091b69f48e27b5795b9b151c46776&oe=5E943710',
                'https://scontent-prg1-1.xx.fbcdn.net/v/t1.15752-9/89920840_670532723756253_8588090457597149184_n.png?_nc_cat=109&_nc_sid=b96e70&_nc_oc=AQliSwhFSu6tlfRA9OkvmxsUCYZShW6FeOSS9OYqgM0mhczWPBxR84jbL229kbJOgnssLBJgdS16fncbDMxCjB6F&_nc_ht=scontent-prg1-1.xx&oh=f22091b69f48e27b5795b9b151c46776&oe=5E943710'
            ],
            variations : [
                {
                    variationName: 'red',
                    description: 'This product is red.',
                    images: [
                        'https://d32-a.sdn.cz/d_32/c_static_F_D/B62Byo/media/img/dogs/krasty_12.png',
                        'https://d32-a.sdn.cz/d_32/c_static_F_D/B62Byo/media/img/logo_v2.svg'
                    ],
                    addFixedPrice: 20,
                    multiplyPrice: 3,
                },
                {
                    variationName: 'blue',
                    description: 'This product is blue.',
                    images: [
                        'https://d32-a.sdn.cz/d_32/c_static_F_D/B62Byo/media/img/dogs/krasty_12.png',
                        'https://d32-a.sdn.cz/d_32/c_static_F_D/B62Byo/media/img/logo_v2.svg'
                    ],
                    addFixedPrice: 50,
                    multiplyPrice: 10,
                },
                {
                    variationName: 'green',
                    description: 'This product is green.',
                    images: [
                        'https://d32-a.sdn.cz/d_32/c_static_F_D/B62Byo/media/img/dogs/krasty_12.png',
                        'https://d32-a.sdn.cz/d_32/c_static_F_D/B62Byo/media/img/logo_v2.svg'
                    ],
                    addFixedPrice: 100,
                    multiplyPrice: 20,
                }
            ],
            addFixedPrice: 10,
            multiplyPrice: 2,
        }
    ],
    10,
    2,
    3,
    10,
    2,
    'DUMMY-1-A',
    'A-B-123',
    100,
    {
        x: 20,
        y: 20,
        z: 50,
    },

);


*/