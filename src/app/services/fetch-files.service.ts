import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable()
export class FetchFilesService {
  // 
  // BUCKET = 'nudelwebsite-data-bucket';
  // photography_images: Array<string> = this.getFiles('photography');
  //
  //
  // getFiles(folder: string): Array<string> {
  //   const fileNames = new Array<string>();
  //   const params = {
  //     Bucket: this.BUCKET,
  //     Prefix: folder
  //   }
  //
  //   this.getS3Bucket().listObjects(params, function(err, data) {
  //     if (err) {
  //       console.log('There was an error getting your files: ' + err);
  //       return;
  //     }
  //
  //     console.log('Successfully got files.');
  //
  //     const fileDatas = data.Contents;
  //     fileDatas.forEach(function (file) {
  //       fileNames.push('https://s3.amazonaws.com/' + params.Bucket + '/' + file.Key);
  //     });
  //   });
  //   return fileNames;
  // }
  //
  // private getS3Bucket(): any {
  //   return new S3({
  //     accessKeyId: 'AKIAJ4XPF2Z3N6CDU7YQ',
  //     secretAccessKey: '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',
  //     region: 'us-east-1'
  //   });
  // }
}
