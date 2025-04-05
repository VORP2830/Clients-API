import { Injectable, NotFoundException } from '@nestjs/common';
import { PostgresDataSource } from 'src/config/postgres.config';
import { Client } from 'src/models/client.entity';
import { PageList, PageParams } from 'src/shared/pagination';
import { ILike, Repository } from 'typeorm';
import { ClientFilter } from './client.filter';

@Injectable()
export class ClientService {
    private readonly clientRepository: Repository<Client>;

    constructor() {
        this.clientRepository = PostgresDataSource.getRepository(Client);
    }

    async get(pageParams: PageParams, filter: ClientFilter): Promise<PageList<Client>> {
        const { pageNumber, pageSize } = new PageParams(pageParams);;
        const { name, email } = filter;

        let where: Partial<Record<keyof ClientFilter, any>> = {};

        if (name) {
            where.name = ILike(`%${name}%`)
        }
        if (email) {
            where.email = ILike(`%${email}%`)
        }

        const [items, count] = await this.clientRepository.findAndCount({
            where: where,
            skip: (pageNumber - 1) * pageSize,
            take: pageSize,
        });

        return new PageList(items, count, pageNumber, pageSize);
    }

    async getById(id: number): Promise<Client> {
        const client = await this.clientRepository.findOne({
            where: { id },
            relations: ['addresses'],
        });
        if (!client) {
            throw new NotFoundException(`Cliente não encontrado`);
        }
        return client;
    }

    async create(client: Client): Promise<Client> {
        const newClient = this.clientRepository.create(client);
        return await this.clientRepository.save(newClient);
    }

    async update(id: number, client: Client): Promise<Client> {
        const existingClient = await this.getById(id);
        Object.assign(existingClient, client);
        return await this.clientRepository.save(existingClient);
    }

    async delete(id: number): Promise<void> {
        const client = await this.getById(id);
        await this.clientRepository.softRemove(client);
    }

}
