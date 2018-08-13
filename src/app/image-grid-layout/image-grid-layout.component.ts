import { Component, OnInit, Input } from '@angular/core';
import { FetchFilesService } from '../services/fetch-files.service';

@Component({
  selector: 'nudel-image-grid-layout',
  templateUrl: './image-grid-layout.component.html',
  styleUrls: ['./image-grid-layout.component.scss']
})
export class ImageGridLayoutComponent implements OnInit {

  @Input() images: Array<string>;

  constructor(private fetchFilesService: FetchFilesService) { }

  ngOnInit() {}

}
