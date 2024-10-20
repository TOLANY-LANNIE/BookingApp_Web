// src/app/services/machine.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environment/environment'; // Ensure the path is correct
import { Mower } from '../../models/mower.model';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  private apiUrl = `${environment.apiUrl}/machines`; // API endpoint

  constructor(private http: HttpClient) { }

  // Method to get all machines
  getMachines(): Observable<Mower[]> {
    return this.http.get<Mower[]>(this.apiUrl).pipe(
      catchError(this.handleError) // Handle errors here
    );
  }

  // Error handling method
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
