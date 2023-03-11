import { Component, EventEmitter, Output } from '@angular/core';
import { appName } from "@app-core/constants/env.const";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public readonly appName = appName;

  @Output() userMenuToggle: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  public toggleUserMenu() {
    this.userMenuToggle.emit();
  }
}
