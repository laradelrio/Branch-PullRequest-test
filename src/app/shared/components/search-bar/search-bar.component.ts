import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shared-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  @Output() public searchClicked = new EventEmitter<string>();

  searchInput: string = '';

  constructor(){}

  onSearch(){
    this.searchClicked.emit(this.searchInput);
  }

}
