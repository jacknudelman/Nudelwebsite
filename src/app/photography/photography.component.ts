import { Component, OnInit } from '@angular/core';
import { FetchFilesService } from '../services/fetch-files.service';

@Component({
  selector: 'nudel-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  // photography_images: Array<string> = this.getPhotographyImages2();

  constructor() { }

  ngOnInit() {
  }

  // getPhotographyImages(): Array<string> {
  //   const x: Array<string> = this.fetchFilesService.getFiles('photography');
  //   console.log(x);
  //   // x.shift();
  //   delete x[0];
  //   console.log(x);
  //   return x;
  // }

  // getPhotographyImages2(): Array<string>{
  //   File file = new File("../assets/images/photography.txt");
  //   var reader = new FileReader();
  //   fileReader.readAsText(file)
  // }
}
