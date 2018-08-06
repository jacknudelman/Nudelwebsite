import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nudel-image-grid-layout',
  templateUrl: './image-grid-layout.component.html',
  styleUrls: ['./image-grid-layout.component.scss']
})
export class ImageGridLayoutComponent implements OnInit {

  images: string[] = ["assets/images/jack1.png",
                      "assets/images/jack2.png",
                      "assets/images/jack3.png",
                      'assets/images/jack4.png',
                      'assets/images/jack5.png'];

  constructor() { }

  ngOnInit() {
  }

}
