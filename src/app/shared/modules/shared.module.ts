import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "@app-shared/components/card/card.component";
import { MaterialModule } from "@app-shared/modules/material.module";
import { HttpClientModule } from "@angular/common/http";
import { UiKitModule } from "@app-shared/modules/ui-kit.module";
import { IconModule } from "@app-shared/modules/icon.module";

const components = [
  CardComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    UiKitModule,
    IconModule,
    HttpClientModule
  ],
  exports: [
    components,
    MaterialModule,
    UiKitModule,
    IconModule,
  ]
})
export class SharedModule { }
