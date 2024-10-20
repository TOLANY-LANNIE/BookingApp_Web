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
export class BookingService {

  constructor() { }
}
