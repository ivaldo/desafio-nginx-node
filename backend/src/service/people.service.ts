import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { People, Prisma } from '@prisma/client';

@Injectable()
export class PeopleService {
  constructor(private prisma: PrismaService) {}

  async People(
    PeopleWhereUniqueInput: Prisma.PeopleWhereUniqueInput,
  ): Promise<People | null> {
    return this.prisma.people.findUnique({
      where: PeopleWhereUniqueInput,
    });
  }

  async Peoples(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.PeopleWhereUniqueInput;
    where?: Prisma.PeopleWhereInput;
    orderBy?: Prisma.PeopleOrderByWithRelationInput;
  }): Promise<People[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.people.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async createPeople(data: Prisma.PeopleCreateInput): Promise<People> {
    return this.prisma.people.create({
      data,
    });
  }

  async updatePeople(params: {
    where: Prisma.PeopleWhereUniqueInput;
    data: Prisma.PeopleUpdateInput;
  }): Promise<People> {
    const { where, data } = params;
    return this.prisma.people.update({
      data,
      where,
    });
  }

  async deletePeople(where: Prisma.PeopleWhereUniqueInput): Promise<People> {
    return this.prisma.people.delete({
      where,
    });
  }
}