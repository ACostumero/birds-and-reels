import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  @Output() appMenuToggle: EventEmitter<void> = new EventEmitter<void>();
  @Output() userMenuToggle: EventEmitter<void> = new EventEmitter<void>();

  public toggleAppMenu() {
    this.appMenuToggle.emit();
  }

  public toggleUserMenu() {
    this.userMenuToggle.emit();
  }
}
