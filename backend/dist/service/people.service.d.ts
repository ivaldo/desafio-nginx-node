import { PrismaService } from './prisma.service';
import { People, Prisma } from '@prisma/client';
export declare class PeopleService {
    private prisma;
    constructor(prisma: PrismaService);
    People(PeopleWhereUniqueInput: Prisma.PeopleWhereUniqueInput): Promise<People | null>;
    Peoples(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.PeopleWhereUniqueInput;
        where?: Prisma.PeopleWhereInput;
        orderBy?: Prisma.PeopleOrderByWithRelationInput;
    }): Promise<People[]>;
    createPeople(data: Prisma.PeopleCreateInput): Promise<People>;
    updatePeople(params: {
        where: Prisma.PeopleWhereUniqueInput;
        data: Prisma.PeopleUpdateInput;
    }): Promise<People>;
    deletePeople(where: Prisma.PeopleWhereUniqueInput): Promise<People>;
}
