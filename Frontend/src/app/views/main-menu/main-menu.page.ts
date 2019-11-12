import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss'],
})
export class MainMenuPage implements OnInit {

  sliderConfig = {
    spaceBetween: 100,
    centeredSlides: true,
    slidesPerView: 1.6
  };

  constructor() { }

  ngOnInit() {
  }

}
