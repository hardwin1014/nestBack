import { IsString, IsOptional, IsNumber, IsDate } from 'class-validator';

export class CreatePersonalDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  employeeId?: string;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsNumber()
  age?: string;

  @IsOptional()
  @IsString()
  department?: string;

  @IsOptional()
  @IsString()
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  idNumber?: string;

  @IsOptional()
  @IsDate()
  hireDate?: Date;

  @IsOptional()
  @IsString()
  identityCardAddress?: string;

  @IsOptional()
  @IsString()
  channel?: string;

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  statusDetail?: string;

  @IsOptional()
  @IsDate()
  departureDate?: Date;

  @IsOptional()
  @IsString()
  departureReason?: string;

  @IsOptional()
  @IsString()
  remark?: string;

  @IsOptional()
  @IsString()
  deductions?: string;

  @IsOptional()
  @IsString()
  employeePolicy?: string;

  @IsOptional()
  @IsString()
  policyRemark?: string;

  @IsOptional()
  @IsString()
  remark3?: string;
}
