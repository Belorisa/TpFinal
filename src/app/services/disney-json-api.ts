import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DisneyCharacter, DisneyCharacterSingle } from '../models/disney-character';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DisneyJsonApi {
  private readonly http: HttpClient = inject(HttpClient)

  getCharactersSearch(search: string,page: number = 1): Observable<DisneyCharacter> {
    return this.http.get<DisneyCharacter>(`${environment.BASE_URL_DISNEY_API}character?pageSize=9820`)
    .pipe(
      map(data => ({
        info: data.info,
        data: data.data.filter(character => character.name.toLowerCase().includes(search.toLowerCase()))
      }))
    )
  }

  getCharacter(id: number): Observable<DisneyCharacterSingle> {
    return this.http.get<DisneyCharacterSingle>(`${environment.BASE_URL_DISNEY_API}character/${id}`)
  }

  getCharacterPage(page: number = 1): Observable<DisneyCharacter> {
    return this.http.get<DisneyCharacter>(`${environment.BASE_URL_DISNEY_API}character?page=${page}`)
  }
}
