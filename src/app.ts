import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import payerRoutes from "./routes/payer.route";
import payerTypeRoutes from "./routes/payer-type.route";

const app = express();

app.use(cors);

app.use(morgan('dev'));
app.use(express.json());

app.use(payerRoutes)
app.use(payerTypeRoutes)

export default app;