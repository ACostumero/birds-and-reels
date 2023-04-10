import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "@app-shared/components/card/card.component";
import { HttpClientModule } from "@angular/common/http";
import { UiKitModule } from "@app-shared/modules/ui-kit.module";
import { IconModule } from "@app-shared/modules/icon.module";
import {PageNotFoundComponent} from "@app-shared/components/page-not-found/page-not-found.component";
import { ErrorComponent } from "@app-shared/components/error/error.component";
import { ForbiddenComponent } from "@app-shared/components/forbidden/forbidden.component";
import { RouterLink } from "@angular/router";
import {CardMiniComponent} from "@app-shared/components/ui/card-mini/card-mini.component";

const components = [
  CardComponent,
  PageNotFoundComponent,
  ErrorComponent,
  ForbiddenComponent
]

@NgModule({
  declarations: [components],
    imports: [
        CommonModule,
        UiKitModule,
        IconModule,
        HttpClientModule,
        RouterLink,
        CardMiniComponent
    ],
  exports: [
    components,
    UiKitModule,
    IconModule,
  ]
})
export class SharedModule { }
