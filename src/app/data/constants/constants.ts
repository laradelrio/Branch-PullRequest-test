import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://rickandmortyapi.com/api';
    public static API_ENDPOINT_CHARACTER: string;
    public static API_ENDPOINT_LOCATION: string;
    public static API_ENDPOINT_EPISODE: string;
    public static TitleOfSite: string = "Rick And Morty";

    constructor() {
        Constants.API_ENDPOINT_CHARACTER = `${this.API_ENDPOINT}/character`;
        Constants.API_ENDPOINT_LOCATION = `${this.API_ENDPOINT}/location`;
        Constants.API_ENDPOINT_EPISODE = `${this.API_ENDPOINT}/episode`;
    }
}