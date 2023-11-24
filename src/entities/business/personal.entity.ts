import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BaseEntity } from 'src/entities/base.entity';

@Entity({ name: 'personal' })
export default class Personal extends BaseEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ nullable: true })
  @ApiProperty()
  name: string; // 姓名

  @Column({ name: 'employee_id', nullable: true, unique: true })
  @ApiProperty()
  employeeId: string; // 工号

  @Column({ nullable: true })
  @ApiProperty()
  gender: string; // 性别

  @Column({ nullable: true })
  @ApiProperty()
  age: string; // 年龄

  @Column({ nullable: true })
  @ApiProperty()
  department: string; // 部门

  @Column({ name: 'phone_number', nullable: true })
  @ApiProperty()
  phoneNumber: string; // 手机号

  @Column({ name: 'id_number', nullable: true, unique: true })
  @ApiProperty()
  idNumber: string; // 身份证号

  @Column({ name: 'hire_date', nullable: true })
  @ApiProperty()
  hireDate: Date; // 入职日期

  @Column({ name: 'identity_card_address', nullable: true })
  @ApiProperty()
  identityCardAddress: string; // 身份证地址

  @Column({ nullable: true })
  @ApiProperty()
  channel: string; // 渠道

  @Column({ nullable: true })
  @ApiProperty()
  status: string; // 状态

  @Column({ name: 'status_detail', nullable: true })
  @ApiProperty()
  statusDetail: string; // 员工详情

  @Column({ name: 'departure_date', nullable: true })
  @ApiProperty()
  departureDate: Date; // 离职日期

  @Column({ name: 'departure_reason', nullable: true })
  @ApiProperty()
  departureReason: string; // 离职原因

  @Column({ nullable: true })
  @ApiProperty()
  remark: string; // 备注

  @Column({ nullable: true })
  @ApiProperty()
  deductions: string; // 扣款项

  @Column({ name: 'employee_policy', nullable: true })
  @ApiProperty()
  employeePolicy: string; // 员工政策

  @Column({ name: 'policy_peamrk', nullable: true })
  @ApiProperty()
  policyReamrk: string; // 政策备注

  @Column({ nullable: true })
  @ApiProperty()
  remark3: string; // 备注3
}
