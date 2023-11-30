import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsNumber, IsDate } from 'class-validator';

export class CreatePersonalDto {
  @ApiProperty({
    description: '名字',
    type: [String],
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: '员工ID',
    type: [String],
  })
  @IsOptional()
  @IsString()
  employeeId?: string;

  @ApiProperty({
    description: '性别',
    type: [String],
  })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({
    description: '年龄',
    type: [Number],
  })
  @IsOptional()
  @IsNumber()
  age?: string;

  @ApiProperty({
    description: '部门',
    type: [String],
  })
  @IsOptional()
  @IsString()
  department?: string;

  @ApiProperty({
    description: '手机号',
    type: [String],
  })
  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @ApiProperty({
    description: '身份证',
    type: [String],
  })
  @IsOptional()
  @IsString()
  idNumber?: string;

  @ApiProperty({
    description: '入职时间',
    type: [Date],
  })
  @IsOptional()
  @IsDate()
  hireDate?: Date;

  @ApiProperty({
    description: '身份证地址',
    type: [String],
  })
  @IsOptional()
  @IsString()
  identityCardAddress?: string;

  @ApiProperty({
    description: '通道',
    type: [String],
  })
  @IsOptional()
  @IsString()
  channel?: string;

  @ApiProperty({
    description: '状态',
    type: [String],
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({
    description: '名字',
    type: [String],
  })
  @IsOptional()
  @IsString()
  statusDetail?: string;

  @ApiProperty({
    description: '名字',
    type: [String],
  })
  @IsOptional()
  @IsDate()
  departureDate?: Date;

  @ApiProperty({
    description: '名字',
    type: [String],
  })
  @IsOptional()
  @IsString()
  departureReason?: string;

  @ApiProperty({
    description: '备注',
    type: [String],
  })
  @IsOptional()
  @IsString()
  remark?: string;

  @ApiProperty({
    description: '名字',
    type: [String],
  })
  @IsOptional()
  @IsString()
  deductions?: string;

  @ApiProperty({
    description: '名字',
    type: [String],
  })
  @IsOptional()
  @IsString()
  employeePolicy?: string;

  @ApiProperty({
    description: '名字',
    type: [String],
  })
  @IsOptional()
  @IsString()
  policyRemark?: string;

  @ApiProperty({
    description: '名字',
    type: [String],
  })
  @IsOptional()
  @IsString()
  remark3?: string;
}
