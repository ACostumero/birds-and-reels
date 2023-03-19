import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntryRoutingModule} from "@app-features/entry/entry-routing.module";
import {EntryComponent} from "@app-features/entry/container/entry.component";



@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    EntryRoutingModule
  ]
})
export class EntryModule { }
