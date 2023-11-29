import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PersonalService } from './personal.service';
import { CreatePersonalDto } from './dto/create-personal.dto';
import { UpdatePersonalDto } from './dto/update-personal.dto';
import Personal from '@/entities/business/personal.entity';

@ApiTags('员工信息管理模块')
@Controller('personal')
export class PersonalController {
  constructor(private readonly personalService: PersonalService) {}

  @ApiOperation({
    summary: '员工信息列表',
  })
  @Get('list')
  async findAll(): Promise<Personal[]> {
    return this.personalService.findAll();
  }

  @ApiOperation({
    summary: '获取员工信息详情',
  })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Personal> {
    return this.personalService.findOne(id);
  }

  @ApiOperation({
    summary: '新增员工信息',
  })
  @Post('addPersonal')
  async create(@Body() createPersonalDto: CreatePersonalDto): Promise<void> {
    await this.personalService.create(createPersonalDto);
  }

  @ApiOperation({
    summary: '更新员工信息',
  })
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePersonalDto: UpdatePersonalDto,
  ) {
    return this.personalService.update(+id, updatePersonalDto);
  }

  @ApiOperation({
    summary: '删除员工信息',
  })
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.personalService.remove(id);
  }
}
