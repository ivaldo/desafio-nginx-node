import { Injectable } from '@angular/core';
import { RequisicaoService } from './requisicao.service';
import { Observable } from 'rxjs';
import { People } from '../model/people';

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor(private requisicaoService: RequisicaoService) {}
  findAll(): Observable<People[]> {
    return this.requisicaoService.get(`/api/people`);
  }
  findById(id: number): Observable<People> {
    return this.requisicaoService.get(`/api/people/${id}`);
  }
  insert(person: People): Observable<People> {
    return this.requisicaoService.post(`/api/people`, {nome: person.nome});
  }
  update(person: People): Observable<People> {
    return this.requisicaoService.put(`/api/people/${person.id}`, {nome: person.nome});
  }
  delete(id: number) {
    return this.requisicaoService.delete(`/api/people/${id}`);
  }
}
