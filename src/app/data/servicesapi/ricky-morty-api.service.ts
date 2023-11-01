import { Injectable } from '@angular/core';
import{ Constants } from '@data/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class RickyMortyApiService {

  private baseCharacters = Constants.API_ENDPOINT_CHARACTER;
  constructor() { 
  }

  
}
