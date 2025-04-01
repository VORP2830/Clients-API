import { ApiProperty } from '@nestjs/swagger';

export class ClientFilter {
    @ApiProperty({ required: false, type: String })
    name: string;

    @ApiProperty({ required: false, type: String })
    email: string;
}