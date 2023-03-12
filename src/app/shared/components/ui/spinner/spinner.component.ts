import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "@app-shared/components/ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule, SvgIconComponent],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {

  private readonly DEFAULT_ICON: string = 'zelda';
  private readonly DEFAULT_SIZE: number = 68;

  @Input() icon: string = this.DEFAULT_ICON;
  @Input() size: number = this.DEFAULT_SIZE;

}
