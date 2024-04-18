import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { People } from './model/people';
import { PeopleService } from './service/people.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterOutlet, TableModule, InputTextModule, ButtonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  people: People[] = [];
  person: People = {};

  constructor(private peopleService: PeopleService) {
    this.peopleService.findAll().subscribe(
      (response: People[]) => {
        this.people = response;
      }
    );
  }

  insert() {
    this.peopleService.insert(this.person).subscribe(
      (response) => {
        this.people.push(response);
        this.person = {};
        alert('People added');
    });
  }

  delete(id: number) {
    this.peopleService.delete(id).subscribe(
      () => {
        this.people = this.people.filter(person => person.id !== id);
        alert('People deleted')
      });
  }
}
