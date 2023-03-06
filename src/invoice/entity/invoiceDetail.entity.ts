import { v4 as uuid } from 'uuid';

export class invoiceDetailEntity {
  id = uuid();
  description: string;
  unitPrice: number;
  quantity: number;
  total: number;
  date: Date;
  sellerName: string;
  buyerName: string;
  additionalNotes: string;
}
