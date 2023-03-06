import { Injectable } from '@nestjs/common';
import { CustomerRepository } from 'src/repositories/customer.repository';
import { customerDto } from '../dto/customer.dto';
import { CustomerEntity } from '../entity/customerEntity';

@Injectable()
export class CustomerService {
  constructor(private readonly customerRepository: CustomerRepository) {}

  createCustomer(user: customerDto): CustomerEntity {
    const newCustomer = new CustomerEntity();
    newCustomer.document = user.document;
    newCustomer.fullName = user.fullName;
    newCustomer.email = user.email;
    newCustomer.phone = user.phone;
    newCustomer.password = user.password;
    const customer = this.customerRepository.register(newCustomer);
    return customer;
  }
  findALl(): CustomerEntity[] {
    return this.customerRepository.findAll();
  }
  getCustomerInfo(customerId: string): CustomerEntity {
    return this.customerRepository.findOneById(customerId);
  }
  changeName(id: string, name: string): void {
    const cambiarNombre = this.customerRepository.findOneById(id);
    cambiarNombre.fullName = name;
    this.customerRepository.update(id, cambiarNombre);
  }
  deleteUser(id: string): void {
    this.customerRepository.delete(id);
  }
}
