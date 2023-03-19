import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "@app-shared/components/card/card.component";
import { HttpClientModule } from "@angular/common/http";
import { UiKitModule } from "@app-shared/modules/ui-kit.module";
import { IconModule } from "@app-shared/modules/icon.module";
import {PageNotFoundComponent} from "@app-shared/components/page-not-found/page-not-found.component";

const components = [
  CardComponent,
  PageNotFoundComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    UiKitModule,
    IconModule,
    HttpClientModule
  ],
  exports: [
    components,
    UiKitModule,
    IconModule,
  ]
})
export class SharedModule { }
