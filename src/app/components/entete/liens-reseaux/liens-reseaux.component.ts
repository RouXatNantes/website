import { Component, OnInit } from '@angular/core';
import { lien } from '../../../../properties/lien';

@Component({
  selector: 'app-liens-reseaux',
  templateUrl: './liens-reseaux.component.html',
  styleUrls: ['./liens-reseaux.component.css']
})
export class LiensReseauxComponent implements OnInit {

  public liens = lien.liens;
  constructor() { }

  ngOnInit() {
  }

}
