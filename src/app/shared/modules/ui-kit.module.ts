import { NgModule } from '@angular/core';
import { IconButtonComponent } from "@app-shared/components/ui/icon-button/icon-button.component";
import { ToolbarComponent } from "@app-shared/components/ui/toolbar/toolbar.component";
import { SvgIconComponent } from "@app-shared/components/ui/svg-icon/svg-icon.component";

const uiKit = [
  IconButtonComponent,
  ToolbarComponent,
  SvgIconComponent
]

@NgModule({
  declarations: [],
  imports: [uiKit],
  exports: [uiKit],
})
export class UiKitModule { }
