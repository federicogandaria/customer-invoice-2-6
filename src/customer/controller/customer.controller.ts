import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { customerDto } from '../dto/customer.dto';
import { CustomerService } from '../service/customer.service';
import { CustomerEntity } from '../entity/customerEntity';
import { CustomerRepository } from 'src/repositories/customer.repository';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerService: CustomerService,
    private readonly customerRepository: CustomerRepository,
  ) {}
  @Post('create')
  createCustomer(@Body() create: customerDto): CustomerEntity {
    return this.customerService.createCustomer(create);
  }
  @Get()
  getAll() {
    return this.customerService.findALl();
  }
  @Get(':id')
  getCustomerInfo(
    @Param('id', ParseUUIDPipe) customerId: string,
  ): CustomerEntity {
    return this.customerService.getCustomerInfo(customerId);
  }
  @Put('/:id')
  updateUser(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() usuario: customerDto,
  ): CustomerEntity {
    return this.customerRepository.update(id, usuario);
  }
  @Patch('updateName/:id')
  changeName(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('Name') name: string,
  ): void {
    this.customerService.changeName(id, name);
  }
  @Delete('delete/:id')
  deleteCustomer(@Param('id') id: string): boolean {
    this.customerService.deleteUser(id);
    return true;
  }
}
