import { BaseRepositoryInterface } from 'src/repositories/base.repository.interface';
import { CustomerEntity } from '../entity/customerEntity';

export type CustomerRepositoryInterface =
  BaseRepositoryInterface<CustomerEntity>;
