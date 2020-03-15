import { IProductVariation } from './ProductVariation';

export interface IProductVariationType {
    id: number | undefined;
    typeName: string;
    images: string[] | undefined;
    variations: IProductVariation[];
    addFixedPrice: number | undefined;
    multiplyPrice: number | undefined;
}

class ProductVariationType implements IProductVariationType{
    id: number | undefined;
    typeName: string;
    images: string[] | undefined;
    variations: IProductVariation[];
    addFixedPrice: number | undefined;
    multiplyPrice: number | undefined;

    constructor(typeName: string, variations: IProductVariation[], id?: number, images?: string[], addFixedPrice?: number, multiplyPrice?: number) {
        this.id = id;
        this.typeName = typeName;
        this.images = images;
        this.variations = variations;
        this.addFixedPrice = addFixedPrice;
        this.multiplyPrice = multiplyPrice;
    }
    
}
export default ProductVariationType;