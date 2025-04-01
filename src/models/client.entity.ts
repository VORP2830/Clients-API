import { Column, Entity, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { Address } from "./address.entity";

@Entity()
export class Client extends BaseEntity {
    @Column()
    name: string;
    
    @Column()
    email: string;

    @OneToMany(() => Address, (address) => address.client, { cascade: true })
    addresses: Address[];

    public addAddress(address: Address): void {
        this.addresses.push(address);
    }
}