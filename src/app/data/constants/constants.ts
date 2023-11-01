import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://rickandmortyapi.com/api';
    public static API_ENDPOINT_CHARACTER: string = 'https://rickandmortyapi.com/api/character';
    public static API_ENDPOINT_LOCATION: string = 'https://rickandmortyapi.com/api/location';
    public static API_ENDPOINT_EPISODE: string = 'https://rickandmortyapi.com/api/episode';
    public static TitleOfSite: string = "Rick And Morty";

    constructor() {}
}