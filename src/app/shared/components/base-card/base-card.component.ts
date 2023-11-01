import { Component, Input } from '@angular/core';
import { Result } from '@app/data/interfaces/character.interface';

@Component({
  selector: 'app-shared-base-card',
  templateUrl: './base-card.component.html',
  styleUrls: ['./base-card.component.scss']
})
export class BaseCardComponent {
  @Input()
  content: any

  constructor(){
    
  }

  getStatusIcon(status: string): string{
    if(status === 'Alive'){
      return 'fa-solid fa-heart-pulse';
    }else if(status === 'Dead'){
      return 'fa-solid fa-skull';
    } else{
      return 'fa-solid fa-circle-question' 
    }
  }

  getStatusColor(status: string): string{
    if(status === 'Alive'){
      return '#0de74f';
    }else if(status === 'Dead'){
      return '#e70d0d';
    } else{
      return '#000000' 
    }
  }

  getSpeciesIcon(species : string){
    if(species === 'Human'){
      return "fa-solid fa-person";
    } else {
      return "fa-brands fa-space-awesome";
    }
  }
}
