import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product, never>;
}
