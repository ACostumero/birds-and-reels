import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html',
  styleUrls: ['./sidenav-left.component.scss']
})
export class SidenavLeftComponent {
  events: string[] = [];
  opened: boolean = false;
}
