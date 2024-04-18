import { PeopleService } from '../service/people.service';
import { People as PeopleModel } from '@prisma/client';
export declare class PeopleController {
    private readonly peopleService;
    constructor(peopleService: PeopleService);
    getPeopleById(id: string): Promise<PeopleModel>;
    getPeople(): Promise<PeopleModel[]>;
    createPeople(postData: {
        nome: string;
    }): Promise<PeopleModel>;
    updatePeople(id: number, postData: {
        nome: string;
    }): Promise<PeopleModel>;
    deletePeople(id: number): Promise<PeopleModel>;
}
