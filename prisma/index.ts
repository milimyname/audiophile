import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// READ
export const getAllProducts = async () => {
  return await prisma.audiophile.findMany()
};



// CREATE
// export const createProduct = async (name : string, category: string, description: string,features: string,  image: string[], newProduct: boolean, price: number, slug: string) => {
//   return await prisma.product.create({
//     data: {
//     name,
//     category,
//     description ,
//     features    ,
//     image ,   
//     new : newProduct , 
//     price, 
//     slug        
//     }
//   });
// }
