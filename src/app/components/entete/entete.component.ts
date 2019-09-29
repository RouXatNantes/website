import { Component, HostListener, Inject, Injectable, OnInit, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { Observable } from 'rxjs';

import { entete } from '../../../properties/entete';
import { Menu } from './menu/menu';
import { MenuService } from '../../services/menu/menu.service';
import { EventService } from '../../services/event/event.service';

@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css'],
  providers: [MenuService]
})

@Injectable()
export class EnteteComponent implements OnInit {
  public titre = entete.titre;
  public intitule = entete.intitule;
  public disponible = entete.disponible;
  public menuMini = false;

  menu_website: Observable<Menu[]>;
  selectedMenu: Menu;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private menuService: MenuService,
              @Inject(DOCUMENT) private document: any,
              private _eventService: EventService) {
  }

  getMenus(): void {
      this.menu_website = this.menuService.getMenus();
  }
  onSelect(menu: Menu): void {
    this.selectedMenu = menu;
  }
  ngOnInit() {
    this.getMenus();
  }

  menuIsMini() {
    return this.menuMini;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    this.menuMini = (number > 80);
    this._eventService.notifyMiniMenu(this.menuMini);
  }
}
