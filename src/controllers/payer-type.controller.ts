import { Request, Response } from "express"
import { PayerType } from "../models/payer-type.model"

export const createPayerType = async (req: Request, res: Response) => {
    try {
        const payerType = new PayerType;
        payerType.code = req.body.code;
        payerType.name = req.body.name;

        if (
            !payerType.code ||
            !payerType.name
        ) {
            throw new Error ('All payerType fields must be filled');
        }

        await payerType.save();

        return res.status(201).json(payerType);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const searchPayerType = async (req: Request, res: Response) => {
    try {
        const payerTypes = await PayerType.find();
        return res.json(payerTypes);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const updatePayerType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const payerType = await PayerType.findOneBy({ id: parseInt(id) });

        if (!payerType) {
            return res.status(404).json({ message: 'payerType does not exists' });
        }
        await PayerType.update({ id: parseInt(id) }, req.body);

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const getByIdPayerType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const payerType = await PayerType.findOneBy({ id: parseInt(id) });

        if (!payerType) {
            return res.status(404).json({ message: 'payerType with given id was nor found' });
        }
        
        return payerType;

    } catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ message: error.message });
        }
    }
}

export const deletePayerType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await PayerType.delete({ id: parseInt(id) });

        if (result.affected === 0) {
            return res.status(404).json({ message: 'PayerType not found' });
        }

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(404).json({ message: error.message });
        }
    }
}