import { Component } from '@angular/core';
import { SidenavService } from "@app-core/services/sidenav.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  public readonly appMenuToggle$ = this._sidenavService.appMenuToggle$;
  public readonly userMenuToggle$ = this._sidenavService.userMenuToggle$;

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
