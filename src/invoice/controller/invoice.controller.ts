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
import { createInvoiceDto } from '../dto/createInvoice.dto';
import { invoiceEntity } from '../entity/invoice.entity';
import { InvoiceService } from '../service/invoice.service';
import { InvoiceRepository } from '../../repositories/invoice.repository';

@Controller('invoice')
export class InvoiceController {
  constructor(
    private readonly invoiceService: InvoiceService,
    private readonly invoiceRepository: InvoiceRepository,
  ) {}

  @Post('create')
  createInvoice(@Body() create: createInvoiceDto): invoiceEntity {
    return this.invoiceService.createInvoice(create);
  }
  @Get()
  getAll() {
    return this.invoiceRepository.findAll();
  }
  @Patch('updateTotal/:id')
  changeTotal(
    @Param('id', ParseUUIDPipe) id: string,
    @Query('Total') total: number,
  ): void {
    this.invoiceService.changeTotal(id, total);
  }
  @Put('/:id')
  updateInvoice(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() invoice: invoiceEntity,
  ): invoiceEntity {
    return this.invoiceRepository.update(id, invoice);
  }
  @Delete('delete/:id')
  deleteInvoice(@Param('id') id: string): boolean {
    this.invoiceService.deleteUser(id);
    return true;
  }
}
