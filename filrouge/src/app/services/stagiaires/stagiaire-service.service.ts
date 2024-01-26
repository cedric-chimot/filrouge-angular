import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Stagiaires } from '../../models/stagiaires.model';

@Injectable({
  providedIn: 'root'
})
export class StagiaireServiceService {
  private apiUrl = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  createStagiaire(stagiaire: Stagiaires): Observable<Stagiaires>{
    return this.httpClient.post<Stagiaires>(`${this.apiUrl}/stagiaires/create`, stagiaire);
  }
}
