import {Component} from '@angular/core';
import {NAV_ROUTES} from "@app-core/constants/navigation.const";
import {Theme} from "@app-core/interfaces/theme.interface";
import {LIGHT_THEME} from "@app-core/constants/theme.const";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public readonly NAV_ROUTES = NAV_ROUTES;
  public readonly ACTIVE_ROUTE_CLASS = 'active';

  public readonly THEME: Theme = LIGHT_THEME;

  public checkButtonClick(event: MouseEvent) {
    console.log('clicked', event)
  }

}
