import { Module } from '@nestjs/common';
import { CustomerRepository } from 'src/repositories/customer.repository';
import { CustomerController } from './controller/customer.controller';
import { CustomerService } from './service/customer.service';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService, CustomerRepository],
})
export class CustomerModule {}
