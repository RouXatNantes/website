import { Component, OnInit } from '@angular/core';
import { cvProperties} from '../../../../properties/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  public adobeDlReaderUrl = cvProperties.adobeDlReaderUrl;
  public download = cvProperties.download;
  public titre = cvProperties.titre;
  public lienPdf = cvProperties.lienPdf;
  constructor() { }

  ngOnInit() {
  }

}
