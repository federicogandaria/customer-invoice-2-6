import { Module } from '@nestjs/common';
import { CustomerModule } from './customer/customer.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [CustomerModule, InvoiceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
