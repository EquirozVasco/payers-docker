import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToOne
} from 'typeorm';
import { PayerType } from './payer-type.model';

@Entity()
export class Payer extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column({
        default: true
    })
    status: boolean;

    @ManyToOne(()=>PayerType, PayerType => PayerType.payer)
    payerType?: PayerType;

}