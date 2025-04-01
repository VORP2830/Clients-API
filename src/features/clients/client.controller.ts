import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Query,
  ParseIntPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from 'src/models/client.entity';
import { PageParams } from 'src/shared/pagination';
import { ClientFilter } from './client.filter';
import { PageList } from 'src/shared/pagination';
import { ClientDto } from './client.dto';

@Controller('api/client')
export class ClientController {
  constructor(private readonly service: ClientService) {}

  @Get()
  async get(@Query() pageParams: PageParams, @Query() filter: ClientFilter): Promise<PageList<Client>> {
    return await this.service.get(pageParams, filter);
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Client> {
    return await this.service.getById(id);
  }

  @Post()
  async create(@Body() client: ClientDto): Promise<Client> {
    return await this.service.create(client as any);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() client: Client
  ): Promise<Client> {
    return await this.service.update(id, client);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return await this.service.delete(id);
  }
}
