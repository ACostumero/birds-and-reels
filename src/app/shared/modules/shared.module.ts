import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "@app-shared/components/card/card.component";
import { MaterialModule } from "@app-shared/modules/material.module";
import { HttpClientModule } from "@angular/common/http";
import { UiKitModule } from "@app-shared/modules/ui-kit.module";

const components = [
  CardComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    UiKitModule,
    HttpClientModule
  ],
  exports: [
    components,
    MaterialModule,
    UiKitModule
  ]
})
export class SharedModule { }
