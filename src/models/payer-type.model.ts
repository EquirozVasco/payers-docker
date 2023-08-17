import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany
} from 'typeorm';
import { Payer } from './payer.model';

@Entity()
export class PayerType extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column({
        default: true
    })
    status: boolean;

    @OneToMany(()=>Payer, Payer => Payer.payerType)
    payer?: Array<Payer>;

}