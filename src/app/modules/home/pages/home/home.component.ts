import { Component, HostListener, OnInit } from '@angular/core';
import { Result } from '@app/data/interfaces/character.interface';
import { RickyMortyApiService } from '@app/data/servicesapi/ricky-morty-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  characters: Result[] = [];
  pagesNum: number = 2;
  scrolled: boolean = false;

  constructor(
    private rmApiService: RickyMortyApiService,
  ) { }

  ngOnInit(): void {
    this.getCharacter();
  }

  getCharacter() {
    this.rmApiService.getCharacter(1)
      .subscribe((resp) => this.characters = resp.results)
  }

  getMoreCharacters() {
    this.rmApiService.getCharacter(this.pagesNum)
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

    this.backToTopBtnDisplay();
  }


  //when to show the button to go th the top
  backToTopBtnDisplay() {
    if (window.scrollY >= window.innerHeight) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  //move page to top
  backToTop() {
    scrollTo(0, 0);
  }
}
