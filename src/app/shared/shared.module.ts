import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BaseCardComponent } from './components/base-card/base-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { ToTopBtnComponent } from './components/to-top-btn/to-top-btn.component';
import { SidebarFilterComponent } from './components/sidebar-filter/sidebar-filter.component';


@NgModule({
  declarations: [
    BaseCardComponent,
    SearchBarComponent,
    ToTopBtnComponent,
    SidebarFilterComponent,
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
    SidebarFilterComponent,
  ]
})
export class SharedModule { }
