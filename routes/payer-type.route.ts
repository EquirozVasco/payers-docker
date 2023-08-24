import { Router } from "express";
import {
    createPayerType,
    deletePayerType,
    updatePayerType,
    getByIdPayerType,
    searchPayerType
} from "../controllers/payer-type.controller";

const payerTypeRouter = Router();

payerTypeRouter.post('/payerTypes', createPayerType);
payerTypeRouter.get('/payerTypes', searchPayerType);
payerTypeRouter.get('/payerTypes/:id', getByIdPayerType);
payerTypeRouter.patch('/payerTypes/:id', updatePayerType);
payerTypeRouter.delete('/payerTypes/:id', deletePayerType);

export default payerTypeRouter;