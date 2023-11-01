import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shared-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.component.scss']
})
export class SidebarFilterComponent {

  @Output() public filterClicked = new EventEmitter<string>();

  statusSelected: string = '';
  speciesSelected: string = '';
  genderSelected: string = '';

  changeStatusSelected(status: string) {
    this.statusSelected = status;
    this.onFilterClick();
  }

  changeSpeciesSelected(species: string) {
    this.speciesSelected = species;
    this.onFilterClick();
  }

  changeGenderSelected(gender: string) {
    this.genderSelected = gender;
    this.onFilterClick();
  }

  onFilterClick() {
    let filterParameters: string = `&status=${this.statusSelected}&species=${this.speciesSelected}&gender=${this.genderSelected}`
    this.filterClicked.emit(filterParameters);
  }

}
