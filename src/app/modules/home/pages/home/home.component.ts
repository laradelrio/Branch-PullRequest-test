import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Result } from '@app/data/interfaces/character.interface';
import { RickyMortyApiService } from '@app/data/servicesapi/ricky-morty-api.service';
import { ToTopBtnComponent } from '@app/shared/components/to-top-btn/to-top-btn.component';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('toTopBtn') toTopBtn!: ToTopBtnComponent;

  characters: Result[] = [];
  pagesNum: number = 2;
  filterParameters: string = '';
  searchValue: string = '';

  constructor(
    private rmApiService: RickyMortyApiService,
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.rmApiService.getCharacter(1, this.searchValue, this.filterParameters) 
    .subscribe((resp) => this.characters = resp.results)
  }

  getMoreCharacters() {
    this.rmApiService.getCharacter(this.pagesNum, this.searchValue, this.filterParameters)
      .subscribe((resp) => resp.results.forEach((result) =>
        this.characters.push(result))
      );
    this.pagesNum++;
  }

  //Infinite Scroll
  @HostListener('window:scroll')
  onScroll() {
    let docHeight = document.documentElement.getBoundingClientRect().height;
    let amountScrolled = document.documentElement.scrollTop + window.innerHeight + 50;
    let initialGet = this.characters.length === 0;

    if (this.pagesNum <= 43 && !initialGet && (amountScrolled >= docHeight)) {
      this.getMoreCharacters();
    }

    this.toTopBtn.backToTopBtnDisplay();
  }

  addFilterParameters(parameters: string) {
    this.filterParameters = parameters;
    this.getCharacter();
  }

  //add search input to api call url
  addSearchedValue(value: string) {
    this.searchValue = '';
    this.searchValue = `&name=${value}`;
    this.getCharacter();
  }

}
