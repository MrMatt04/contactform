import { Component } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-resultaten',
  standalone: true,
  imports: [],
  templateUrl: './resultaten.component.html',
  styleUrl: './resultaten.component.css'
})
export class ResultatenComponent {
  private berichtenUrl = 'api/berichten';  // URL to web api
  constructor(private http: HttpClient) { }

  getBerichten(): Observable<InMemoryDataService[]> {
    return this.http.get<InMemoryDataService[]>(this.berichtenUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  // createBericht(bericht: InMemoryDataService): Observable<InMemoryDataService> {
  //   bericht.id = null;
  //   return this.http.post<Product>(this.productsUrl, product).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       console.error(error);
  //       return throwError(error);
  //     })
  //   )
  // }


}
