import { Component } from '@angular/core';
import { SidenavService } from "@app-core/services/sidenav.service";
import { Bird } from "@app-core/interfaces/bird.interface";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public readonly appMenuToggle$ = this._sidenavService.appMenuToggle$;
  public readonly userMenuToggle$ = this._sidenavService.userMenuToggle$;

  // TODO: REMOVE, FOR TESTING PURPOSES ONLY
  public readonly birdsMock: Bird[] = [
    {
      id: '1',
      name: 'Petirrojo Europeo',
      scientificName: 'Erithacus Rubecula',
      image: '../../assets/images/petirrojo.jpg',
      order: 'Passeriformes',
      family: 'Turdidae'
    },
    {
      id: '2',
      name: 'Perdiz Roja',
      scientificName: 'Alectoris Rufa',
      image: '../../assets/images/perdiz-roja.jpg',
      order: 'Galliformes',
      family: 'Phasianidae'
    },
    {
      id: '3',
      name: 'Búho Real',
      scientificName: 'Bubo Bubo',
      image: '../../assets/images/buho-real.jpg',
      order: 'Strigiformes',
      family: 'Strigidae'
    },
    {
      id: '4',
      name: 'Herrerillo Común',
      scientificName: 'Cyanistes Caeruleus',
      image: '../../assets/images/herrerillo.jpg',
      order: 'Passeriformes',
      family: 'Paridae'
    },
    {
      id: '5',
      name: 'Abubilla',
      scientificName: 'Upupa Epops',
      image: '../../assets/images/abubilla.jpg',
      order: 'Coraciiformes',
      family: 'Upupidae'
    },
    {
      id: '6',
      name: 'Trepador Azul',
      scientificName: 'Sitta Europaea',
      image: '../../assets/images/trepador-azul.jpg',
      order: 'Passeriformes',
      family: 'Sittidae'
    },

  ]
  constructor(private readonly _sidenavService: SidenavService) {
  }

  public toggleAppMenu() {
    this._sidenavService.toggleAppMenu();
  }

  public toggleUserMenu() {
    this._sidenavService.toggleUserMenu();
  }

  public closeByBackdrop() {
    this._sidenavService.closeByBackdrop();
  }

}
