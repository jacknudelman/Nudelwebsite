import { Component, OnInit } from '@angular/core';
import { FetchFilesService } from '../services/fetch-files.service';

@Component({
  selector: 'nudel-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  images: Array<string> = this.getPhotographyImages();

  constructor(private fetchFilesService: FetchFilesService) { }

  ngOnInit() {
  }

  getPhotographyImages(): Array<string> {
    const x: Array<string> = this.fetchFilesService.getFiles('photography');
    console.log(x);
    // x.shift();
    delete x[0];
    console.log(x);
    return x;
  }
}
