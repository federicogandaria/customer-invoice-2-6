import { Injectable } from '@nestjs/common';
import { invoiceEntity } from '../entity/invoice.entity';
import { InvoiceRepository } from '../../repositories/invoice.repository';
import { createInvoiceDto } from '../dto/createInvoice.dto';
import { invoiceDetailEntity } from '../entity/invoiceDetail.entity';

@Injectable()
export class InvoiceService {
  constructor(private invoiceRepository: InvoiceRepository) {}

  getCustomerInfo(invoiceId: string): invoiceEntity {
    return this.invoiceRepository.findOneById(invoiceId);
  }
  createInvoice(invoice: createInvoiceDto): invoiceEntity {
    const invoiceDetail = new invoiceDetailEntity();

    const newInvoice = new invoiceEntity();
    newInvoice.details = invoiceDetail;
    newInvoice.quantity = invoice.quantity;
    newInvoice.unitPrice = invoice.unitPrice;
    newInvoice.total = invoice.total;

    const customer = this.invoiceRepository.register(newInvoice);
    return customer;
  }
  changeTotal(id: string, total: number): void {
    const cambiarTotal = this.invoiceRepository.findOneById(id);
    cambiarTotal.total = total;
    this.invoiceRepository.update(id, cambiarTotal);
  }
  deleteUser(id: string): void {
    this.invoiceRepository.delete(id);
  }
}
