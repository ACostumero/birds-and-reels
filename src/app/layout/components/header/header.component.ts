import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Output() appMenuToggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() userMenuToggle: EventEmitter<void> = new EventEmitter<void>();

  public toggleAppMenu() {
    this.appMenuToggle.emit();
  }

  public toggleUserMenu() {
    this.userMenuToggle.emit();
  }
}
