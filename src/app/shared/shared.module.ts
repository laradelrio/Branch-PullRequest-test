import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ToTopBtnComponent } from './components/to-top-btn/to-top-btn.component';


@NgModule({
  declarations: [
    BaseCardComponent,
    SearchBarComponent,
    ToTopBtnComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports:[
    BaseCardComponent,
    SearchBarComponent,
    ToTopBtnComponent,
  ]
})
export class SharedModule { }
