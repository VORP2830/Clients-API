import { Column, Entity, ManyToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Client } from "./client.entity";

@Entity()
export class Address extends BaseEntity {
    @Column()
    street: string;

    @Column({ nullable: true })
    complement: string;

    @Column({ nullable: true })
    number: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column({ length: 8 })
    postalCode: string;

    @ManyToOne(() => Client, (client) => client.addresses)
    client: Client;
}