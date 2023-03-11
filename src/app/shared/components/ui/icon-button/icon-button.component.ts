import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "@app-shared/components/ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-icon-button',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})

export class IconButtonComponent {

  private readonly DEFAULT_SIZE = 40;
  @Input() size: number = this.DEFAULT_SIZE;
  @Input() icon: string = '';

}
