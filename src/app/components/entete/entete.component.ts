import { Component, HostListener, Inject, Injectable, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

import { entete } from '../../../properties/entete';
import { Menu } from './menu/menu';
import { MenuService } from '../../services/menu/menu.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css'],
  providers: [MenuService]
})

@Injectable()
export class EnteteComponent implements OnInit {
  public titre= entete.titre;
  public intitule= entete.intitule;
  public disponible= entete.disponible;
  public menuMini= false;

  menu_website: Menu[];
  selectedMenu: Menu;

  constructor(private route: ActivatedRoute, private router: Router, private menuService: MenuService, @Inject(DOCUMENT) private document: any) { }

  getMenus(): void {
    this.menuService.getMenus().then(menu => this.menu_website = menu);
  }
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }
  ngOnInit() {
    this.getMenus();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    this.menuMini = (number > 80);
  }
}
