import { invoiceDetailEntity } from '../entity/invoiceDetail.entity';
import { v4 as uuid } from 'uuid';

export class createInvoiceDto {
  id = uuid();
  quantity: number;
  unitPrice: number;
  total: number;
  details: invoiceDetailEntity;
}
