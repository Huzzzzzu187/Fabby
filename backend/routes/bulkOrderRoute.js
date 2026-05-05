import express from 'express';
import { placeBulkOrder, allBulkOrders, updateBulkOrderStatus } from '../controllers/bulkOrderController.js';
import adminAuth from '../middleware/adminAuth.js';

const bulkOrderRouter = express.Router();

// User Route (No auth needed as it's an inquiry form)
bulkOrderRouter.post('/place', placeBulkOrder);

// Admin Routes
bulkOrderRouter.post('/list', adminAuth, allBulkOrders);
bulkOrderRouter.post('/status', adminAuth, updateBulkOrderStatus);

export default bulkOrderRouter;
