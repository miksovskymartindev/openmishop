import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import ProductDao from '@daos/Product/ProductDao.mock';
import { paramMissingError } from '@shared/constants';

// Init shared
const router = Router();
const productDao = new ProductDao();


/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    const product = await productDao.getAll();
    return res.status(OK).json({products: product});
});


/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
    const { product } = req.body;
    console.log(req.body);
    
    if (!product) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    await productDao.add(product);
    return res.status(CREATED).end();
});


/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

router.put('/update', async (req: Request, res: Response) => {
    const { user: product } = req.body;
    if (!product) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    product.id = Number(product.id);
    await productDao.update(product);
    return res.status(OK).end();
});


/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    await productDao.delete(Number(id));
    return res.status(OK).end();
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
