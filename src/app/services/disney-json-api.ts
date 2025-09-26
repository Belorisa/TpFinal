import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DisneyCharacter, DisneyCharacterSingle } from '../models/disney-character';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DisneyJsonApi {
  private readonly http: HttpClient = inject(HttpClient)

  getCharacters(): Observable<DisneyCharacter> {
    return this.http.get<DisneyCharacter>(`${environment.BASE_URL_DISNEY_API}character`)
  }

  getCharacter(id: number): Observable<DisneyCharacterSingle> {
    return this.http.get<DisneyCharacterSingle>(`${environment.BASE_URL_DISNEY_API}character/${id}`)
  }

  getCharacterPage(page: number = 1): Observable<DisneyCharacter> {
    return this.http.get<DisneyCharacter>(`${environment.BASE_URL_DISNEY_API}character?page=${page}`)
  }
}
