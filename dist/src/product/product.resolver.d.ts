import { ProductService } from './product.service';
export declare class ProductResolver {
    private readonly productService;
    constructor(productService: ProductService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
}
