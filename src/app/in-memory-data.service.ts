import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const berichten = [
      { name: 'Mathieu', email: 'mathieuvantuil2000@gmail.com', phoneNum: '0612345678', woonplaats: 'Amsterdam', adress: 'Kerkstraat 1', Onderwerp: 'Vraag', bericht: 'Dit is een vraag'}
    ];
    return {berichten};
  }
}
