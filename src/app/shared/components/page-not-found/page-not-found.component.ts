import { Component } from '@angular/core';
import { CATEGORY_ROUTES } from "@app-core/constants/navigation.const";
import {ThemeService} from "@app-core/services/theme.service";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  constructor(private readonly _themeService: ThemeService) {
  }
  public readonly TITLE: string = 'Page not found';
  public readonly ICON_NAME: string = 'fragmented-sword';
  public readonly CATEGORY_ROUTES = CATEGORY_ROUTES;
  public readonly primaryColor = this._themeService.getColor('primary-color');
}
