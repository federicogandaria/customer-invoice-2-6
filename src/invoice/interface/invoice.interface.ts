import { BaseRepositoryInterface } from 'src/repositories/base.repository.interface';
import { invoiceEntity } from '../entity/invoice.entity';

export type InvoiceRepositoryInterface = BaseRepositoryInterface<invoiceEntity>;
