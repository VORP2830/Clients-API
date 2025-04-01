import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty()
  street: string;

  @ApiProperty({ required: false })
  complement?: string;

  @ApiProperty({ required: false })
  number?: string;

  @ApiProperty()
  city: string;

  @ApiProperty()
  state: string;

  @ApiProperty()
  postalCode: string;
}
