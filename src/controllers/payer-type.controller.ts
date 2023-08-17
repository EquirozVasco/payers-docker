import { Request, Response } from "express"
import { PayerType } from "../models/payer-type.model"

export const createPayerType = async (req: Request, res: Response) => {
    try {
        const payer = new Payer;
        payer.code = req.body.code;
        payer.name = req.body.name;
        payer.email = req.body.email;

        if (
            !payer.code ||
            !payer.name ||
            !payer.email ||
            !payer.paymentResponsibleType
        ) {
            throw new Error ('All payer fields must be filled');
        }

        const paymentResponsibleTypeId = req.body.paymentResponsibleTypeId;

        if (paymentResponsibleTypeId) {
            const payerType = await payerTypeRepository.findOne(paymentResponsibleTypeId);
            if (!payerType) {
                throw new Error("Invalid paymentResponsibleTypeId");
            }
            payer.paymentResponsibleType = payerType;
        }

        await payer.save();

        return res.status(201).json(payer);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const searchPayerType = async (req: Request, res: Response) => {
    try {
        const payers = await Payer.find();
        return res.json(payers);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const updatePayerType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;

        const payer = await Payer.findOneBy({ id: parseInt(id) });

        if (!payer) {
            return res.status(404).json({ message: 'payer does not exists' });
        }
        await Payer.update({ id: parseInt(id) }, req.body);

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

        const payer = await Payer.findOneBy({ id: parseInt(id) });

        if (!payer) {
            return res.status(404).json({ message: 'payer with given id was nor found' });
        }
        
        return payer;

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export const deletePayerType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await Payer.delete({ id: parseInt(id) });

        if (result.affected === 0) {
            return res.status(404).json({ message: 'Payer not found' });
        }

        return res.sendStatus(204);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
}