import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  bericht = [
    {
      name: 'Mathieu',
      email: 'mathieuvantuil2000@gmail.com',
      phoneNum: '0612345678',
      woonplaats: 'Amsterdam',
      adress: 'Kerkstraat 1',
      Onderwerp: 'Vraag',
      bericht: 'Dit is een vraag',
    },
  ];
  constructor() {}

  createDb() {
    return { bericht: this.bericht };
  }
  //CRUD get all items
}
