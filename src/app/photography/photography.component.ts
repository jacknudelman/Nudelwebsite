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
    return this.fetchFilesService.getFiles('photography');
  }
}
