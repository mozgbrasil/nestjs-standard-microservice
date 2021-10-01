import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { UpdateCompanyDto } from './dtos/update-company.dto';
// import { Company } from './interfaces/company.interface';
import { IPatient } from './models/Patient';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Company') private readonly companyModel: Model<IPatient>,
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<IPatient> {
    const companySaved = await new this.companyModel(createCompanyDto).save();

    if (!companySaved) {
      throw new RpcException('Problem to create a company');
    }
    return companySaved;
  }

  async findCompanyByName(name: string): Promise<IPatient> {
    return await this.companyModel.findOne({ name });
  }

  async findCompanyByIdOrThrow(_id: string): Promise<IPatient> {
    return await this.companyModel.findById({ _id });
  }

  async findAllCompanies(): Promise<Array<IPatient>> {
    return await this.companyModel.find();
  }

  async updateCompany(
    _id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<void> {
    await this.companyModel.findByIdAndUpdate(_id, updateCompanyDto);
  }
}
