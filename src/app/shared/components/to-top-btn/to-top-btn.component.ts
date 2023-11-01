import { Component } from '@angular/core';

@Component({
  selector: 'app-to-top-btn',
  templateUrl: './to-top-btn.component.html',
  styleUrls: ['./to-top-btn.component.scss']
})
export class ToTopBtnComponent {

  scrolled: boolean = false;

   //when to show the button that takes you to the top of the page
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
