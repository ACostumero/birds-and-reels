import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "@app-shared/components/ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})

export class IconButtonComponent extends SvgIconComponent{
  private readonly BUTTON_DEFAULT_SIZE = 40;
  @Input() buttonSize: number = this.BUTTON_DEFAULT_SIZE;
  @Input() icon: string = '';
  @Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  public emitClick(event: MouseEvent) {
    this.buttonClick.emit(event);
  }

}
