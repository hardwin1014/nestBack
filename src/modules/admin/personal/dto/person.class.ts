import { ApiProperty } from '@nestjs/swagger';

export class queryFormDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  employeeId: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  idNumber: string;
}
