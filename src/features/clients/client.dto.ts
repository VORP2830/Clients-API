import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './address.dto';

export class ClientDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ type: [AddressDto] })
  addresses: AddressDto[];
}
