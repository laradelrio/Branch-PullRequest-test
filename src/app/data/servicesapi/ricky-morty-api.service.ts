import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constants } from '@data/constants/constants';
import { CharacterAPIResp } from '../interfaces/character.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickyMortyApiService {

  private baseCharacter = Constants.API_ENDPOINT_CHARACTER;
  constructor(
    private http: HttpClient,
  ) {
  }

  getCharacter(pageNum: number, search: string, params: string): Observable<CharacterAPIResp> {
    try {
      return this.http.get<CharacterAPIResp>(`${this.baseCharacter}?page=${pageNum}${search}${params}`);
    } catch (error) {
      return this.noCharacterFound([]);
    }
  }

  noCharacterFound(arg0: never[]): Observable<CharacterAPIResp> {
    throw new Error('No character with these properties found');
  }

}

