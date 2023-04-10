import { Component } from '@angular/core';
import { MOUNTAIN_MEADOW } from "@app-core/constants/theme.const";
import { CATEGORY_ROUTES } from "@app-core/constants/navigation.const";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  public readonly TITLE: string = 'Page not found';
  public readonly ICON_NAME: string = 'fragmented-sword';
  public readonly CATEGORY_ROUTES = CATEGORY_ROUTES;
  public readonly MOUNTAIN_MEADOW = MOUNTAIN_MEADOW;
}
