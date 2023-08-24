import { DataSource } from "typeorm";
import { Payer } from "./models/payer.model";
import { PayerType } from "./models/payer-type.model";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "payers",
    synchronize: true,
    entities: [
        Payer,
        PayerType
    ]
})