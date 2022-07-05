import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllProducts } from "../../prisma/index";



type Data = {
    data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  
      if(req.method === 'GET'){
        // fetch all products
        const products = await getAllProducts()
        res.status(200).json({data: JSON.stringify(products)})
      }

    }