import { IProductVariationType } from './ProductVariationType';

export interface IProductVariation {
    id: number | undefined;
    variationName: string;
    description: string | undefined;
    images: string[] | undefined;
    addFixedPrice: number | undefined;
    multiplyPrice: number | undefined;
}

class ProductVariation implements IProductVariation {
    id: number | undefined;
    variationName: string;
    description: string | undefined;
    images: string[] | undefined;
    addFixedPrice: number | undefined;
    multiplyPrice: number | undefined;
    
    constructor(variationName: string, id?: number, description?: string, images?: string[], addFixedPrice?: number, multiplyPrice?: number) {
        this.id = id;
        this.variationName = variationName;
        this.description = description;
        this.images = images;
        this.addFixedPrice = addFixedPrice;
        this.multiplyPrice = multiplyPrice;
    }
}

export default ProductVariation;