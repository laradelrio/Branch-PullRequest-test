import { Component, OnInit } from '@angular/core';
import { Result } from '@app/data/interfaces/character.interface';
import { RickyMortyApiService } from '@app/data/servicesapi/ricky-morty-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  characters: Result[] = [];

  constructor(
    private rmApiService: RickyMortyApiService,
  ){}
  
  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter(){
    this.rmApiService.getCharacter()
    .subscribe((resp)=> this.characters = resp.results)
  }
}
