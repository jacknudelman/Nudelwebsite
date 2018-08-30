import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FetchFilesService } from '../services/fetch-files.service';

@Component({
  selector: 'nudel-image-grid-layout',
  templateUrl: './image-grid-layout.component.html',
  styleUrls: ['./image-grid-layout.component.scss']
})
export class ImageGridLayoutComponent implements OnInit {

  images : Array<string>;
  @Input() path : string;

  constructor(private fetchFilesService: FetchFilesService) {}

  ngOnInit() {
    console.log("the path is " + this.path);
    if (this.path =='photography') {
      this.images = Constants.photography_images.split(',');
    } else if (this.path == 'art') {
      this.images = Constants.art_images.split(',');
    }

    this.images.forEach(function(value, index, images) {
      if (value.includes(' ')){
        images[index] = value.substring(1);
      }
    });
  }
}

export class Constants {
  static photography_images : string =
  "BJFE0251.jpg,CDLO4398.jpg,CSKB5912.jpg,EFEL1346.jpg, FBFJ7694.jpg,HRINE4933.jpg,HWXL1101.jpg,IMG_0288.jpg,IMG_0293.jpg, IMG_0296.jpg,IMG_0298.jpg,IMG_0324.jpg,IMG_0334.jpg,IMG_0335.jpg, IMG_0352.jpg,IMG_0367.jpg,IMG_0388.jpg,IMG_0391.jpg,IMG_0474.jpg, IMG_0480.jpg,IMG_0484.jpg,IMG_0541.jpg,IMG_0559.jpg,IMG_0563.jpg, IMG_0581.jpg,IMG_0589.jpg,IMG_0730.jpg,IMG_0769.jpg,IMG_0777.jpg, IMG_0778.jpg,IMG_1025.jpg,IMG_1034.jpg,IMG_1061.jpg,IMG_1082.jpg, IMG_1085.jpg,IMG_1180.jpg,IMG_1322.jpg,IMG_1330.jpg,IMG_1851.jpg, IMG_1866.jpg,IMG_1898.jpg,IMG_1969.jpg,IMG_1990.jpg,IMG_1996.jpg, IMG_2004.jpg,IMG_2005.jpg,IMG_2008.jpg,IMG_2012.jpg,IMG_2018.jpg, IMG_2058.jpg,IMG_2062.jpg,IMG_2144.jpg,IMG_2154.jpg,IMG_3221.jpg, IMG_E0408.jpg,IMG_E0460.jpg,LDEG6851.jpg,MLGX5673.jpg,MMGR9462.jpg, MMTS6266.jpg,NZNQ7826.jpg,OJFX6018.jpg,P1010926.jpg,P1011349.jpg, P1011399.jpg,P1011402.jpg,P1011414.jpg,P1011483.jpg,P1011516.jpg," +
  "P1011555.jpg,P5280002.jpg,P6030110.jpg,P6030125.jpg,P6040195.jpg, P6040201.jpg,P6040206.jpg,P7020434.jpg,P7020443.jpg,P7020449.jpg, P7020465.jpg,P7020489.jpg,P7080577.jpg,P7080604.jpg,P7080610.jpg, P7090637.jpg,P7090648.jpg,P7090651.jpg,P7090664.jpg,P7090665.jpg, P7090688.jpg,P7090708.jpg,QNMN1279.jpg,RJGD9553.jpg,RPFQ3161.jpg, SQQA5968.jpg,TMLD8720.jpg,UMEE6182.jpg,UYTR9705.jpg,WCOY7905.jpg, WVQI8546.jpg,XDTO2026.jpg,XQUC4112.jpg";


  static art_images : string= "";
}
