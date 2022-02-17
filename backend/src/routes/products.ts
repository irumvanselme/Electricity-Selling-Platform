import { Request, Response } from "express";
import prisma from "../client";

export async function getProductsHandler (req: Request, res: Response) {
    const products = await prisma.product.findMany();

    res.json(products);
}

export async function createAProduct (req: Request, res: Response) {
    if (req.body.name == null)
        return res.status(400).send({ message: "Product name is required " })

    let existingProduct = await prisma.product.findFirst({
        where: {
            name: req.body.name
        }
    })

    if (existingProduct)
        return res.status(400).send({ message: "Product with this name already created " })

    const product = await prisma.product.create({ data: req.body });

    return res.send({ message: "Saved", product })
}