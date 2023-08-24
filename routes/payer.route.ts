import { Router } from "express";
import {
    createPayer,
    deletePayer,
    searchPayers,
    updatePayer,
    getByIdPayer
} from "../controllers/payer.controller";

const payerRouter = Router();

payerRouter.post('/payers', createPayer);
payerRouter.get('/payers', searchPayers);
payerRouter.get('/payers/:id', getByIdPayer);
payerRouter.patch('/payers/:id', updatePayer);
payerRouter.delete('/payers/:id', deletePayer);

export default payerRouter;