import { PrismaService } from "./../src/prisma/prisma.service";
import products from "./products";

const prisma = new PrismaService();

(function seed() {
    products.forEach(async (product) => {
        await prisma.product.create({
            data: {
                name: product.name,
                price: product.price,
                description: product.description,
                image: product.image,
                brand: product.brand,
            },
        });
    });
})();