import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Personal from '@/entities/business/personal.entity';
import { CreatePersonalDto } from '@/modules/admin/system/personal/dto/create-personal.dto';
import { UpdatePersonalDto } from '@/modules/admin/system/personal/dto/update-personal.dto';

@Injectable()
export class PersonalService {
  constructor(
    @InjectRepository(Personal)
    private readonly personalRepository: Repository<Personal>,
  ) {}

  async findAll(): Promise<Personal[]> {
    return await this.personalRepository.find();
  }

  async findOne(id: number): Promise<Personal | undefined> {
    return await this.personalRepository.findOne({
      where: { id: id },
    });
  }

  async create(personal: CreatePersonalDto): Promise<void> {
    await this.personalRepository.save(personal);
  }

  async update(id: number, personal: UpdatePersonalDto): Promise<void> {
    await this.personalRepository.update(id, { ...personal });
  }

  async remove(id: number): Promise<void> {
    await this.personalRepository.delete(id);
  }
}
