import { Router } from 'express';
import ProductRouter from './Products';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/products', ProductRouter);

// Export the base-router
export default router;
