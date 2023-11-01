import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseCardComponent } from './components/base-card/base-card.component';


@NgModule({
  declarations: [
    BaseCardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports:[
    BaseCardComponent
  ]
})
export class SharedModule { }
