import { Module } from '@nestjs/common';
import { InvoiceController } from './controller/invoice.controller';
import { InvoiceService } from './service/invoice.service';
import { InvoiceRepository } from '../repositories/invoice.repository';

@Module({
  controllers: [InvoiceController],
  providers: [InvoiceService, InvoiceRepository],
})
export class InvoiceModule {}
