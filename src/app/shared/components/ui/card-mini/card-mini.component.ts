import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "@app-shared/components/ui/svg-icon/svg-icon.component";

@Component({
  selector: 'app-card-mini',
  standalone: true,
  imports: [CommonModule,SvgIconComponent],
  templateUrl: './card-mini.component.html',
  styleUrls: ['./card-mini.component.scss']
})
export class CardMiniComponent {

  @Input() title?: string;
  @Input() iconName?: string;

}
