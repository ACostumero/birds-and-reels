import {Component} from '@angular/core';
import { NAVBAR_ROUTES } from "@app-core/constants/navigation.const";
import {ThemeService} from "@app-core/services/theme.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  public readonly NAVBAR_ROUTES = NAVBAR_ROUTES;
  public readonly ACTIVE_ROUTE_CLASS = 'active';

  constructor(private readonly _themeService: ThemeService) {
  }

  public iconColor = this._themeService.getColor('primary-accent-color')
  public iconActiveColor = this._themeService.getColor('primary-color')

  public getThemeIcon() {
    return this._themeService.getIcon();
  }

  public toggleTheme() {
    this._themeService.toggleTheme();
  }

}
