import { Injectable, NotFoundException } from '@nestjs/common';
import { invoiceEntity } from 'src/invoice/entity/invoice.entity';
import { InvoiceRepositoryInterface } from 'src/invoice/interface/invoice.interface';
import { BaseRepository } from './base/base.repository';

@Injectable()
export class InvoiceRepository
  extends BaseRepository<invoiceEntity>
  implements InvoiceRepositoryInterface
{
  register(entity: invoiceEntity): invoiceEntity {
    this.database.push(entity);
    return this.database.at(-1) ?? entity;
  }

  update(id: string, entity: invoiceEntity): invoiceEntity {
    const indexCurrentEntity = this.database.findIndex(
      (item) => item.id === id,
    );
    if (indexCurrentEntity >= 0)
      this.database[indexCurrentEntity] = {
        ...this.database[indexCurrentEntity],
        ...entity,
        id,
      } as invoiceEntity;
    else throw new NotFoundException();
    return this.database[indexCurrentEntity];
  }

  delete(id: string): void {
    this.database.splice(
      this.database.findIndex((item) => item.id === id),
      1,
    );
  }

  findAll(): invoiceEntity[] {
    return this.database;
  }

  findOneById(id: string): invoiceEntity {
    const currentEntity = this.database.find((item) => item.id === id);
    if (currentEntity) return currentEntity;
    else throw new NotFoundException('Elemento no encontrado');
  }
}
