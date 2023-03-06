import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomerEntity } from 'src/customer/entity/customerEntity';
import { CustomerRepositoryInterface } from 'src/customer/interface/customer.interface';
import { BaseRepository } from './base/base.repository';

@Injectable()
export class CustomerRepository
  extends BaseRepository<CustomerEntity>
  implements CustomerRepositoryInterface
{
  register(entity: CustomerEntity): CustomerEntity {
    this.database.push(entity);
    return this.database.at(-1) ?? entity;
  }

  update(id: string, entity: CustomerEntity): CustomerEntity {
    const indexCurrentEntity = this.database.findIndex(
      (item) => item.id === id && typeof item.deletedAt === 'undefined',
    );
    if (indexCurrentEntity >= 0)
      this.database[indexCurrentEntity] = {
        ...this.database[indexCurrentEntity],
        ...entity,
        id,
      } as CustomerEntity;
    else throw new NotFoundException();
    return this.database[indexCurrentEntity];
  }

  delete(id: string): void {
    this.database.splice(
      this.database.findIndex((item) => item.id === id),
      1,
    );
  }

  findAll(): CustomerEntity[] {
    return this.database.filter((item) => item.deletedAt === undefined);
  }

  findOneById(id: string): CustomerEntity {
    const currentEntity = this.database.find(
      (item) => item.id === id && typeof item.deletedAt === 'undefined',
    );
    if (currentEntity) return currentEntity;
    else throw new NotFoundException('Elemento no encontrado');
  }
}
