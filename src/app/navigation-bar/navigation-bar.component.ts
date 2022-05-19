import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
})
export class NavigationBarComponent implements OnInit {
  featureChevron: boolean = false;
  companyChevron: boolean = false;
  isShowPannel: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  featuresToggle() {
    this.featureChevron = !this.featureChevron;
  }

  companyToggle() {
    this.companyChevron = !this.companyChevron;
  }

  pannelToggle() {
    this.isShowPannel = !this.isShowPannel;
  }
}
