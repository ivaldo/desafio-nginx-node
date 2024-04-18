import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PeopleService } from '../service/people.service';
import { People as PeopleModel } from '@prisma/client';

@Controller()
export class PeopleController {
  constructor(
    private readonly peopleService: PeopleService,
  ) { }

  @Get('/api/people/:id')
  async getPeopleById(@Param('id') id: string): Promise<PeopleModel> {
    return this.peopleService.People({ id: Number(id) });
  }

  @Get('/api/people')
  async getPeople(): Promise<PeopleModel[]> {
    return this.peopleService.Peoples({});
  }


  @Post('/api/people')
  async createPeople(
    @Body() postData: { nome: string; },
  ): Promise<PeopleModel> {
    const { nome } = postData;
    return this.peopleService.createPeople({
      nome,
    });
  }

  @Put('/api/people/:id')
  async updatePeople(
    @Param('id') id: number,
    @Body() postData: { nome: string; },
  ): Promise<PeopleModel> {
    const { nome } = postData;
    return this.peopleService.updatePeople({
      where: { id: Number(id) },
      data: { nome },
    });
  }

  @Delete('/api/people/:id')
  async deletePeople(
    @Param('id') id: number
  ): Promise<PeopleModel> {
    return this.peopleService.deletePeople({ id: Number(id) });
  }

}