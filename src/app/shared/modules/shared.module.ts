import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "@app-shared/components/card/card.component";
import { MaterialModule } from "@app-shared/modules/material.module";
import { HttpClientModule } from "@angular/common/http";

const components = [
  CardComponent
]

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ],
  exports: [
    components,
    MaterialModule
  ]
})
export class SharedModule { }
