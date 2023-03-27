import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EntryRoutingModule} from "@app-features/entry/entry-routing.module";
import {EntryComponent} from "@app-features/entry/container/entry.component";
import {EntryFacade} from "@app-features/entry/facades/entry.facade";
import {SpinnerComponent} from "@app-shared/components/ui/spinner/spinner.component";
import {SharedModule} from "@app-shared/modules/shared.module";



@NgModule({
  declarations: [EntryComponent],
  imports: [
    CommonModule,
    EntryRoutingModule,
    SpinnerComponent,
    SharedModule
  ],
  providers: [EntryFacade]
})
export class EntryModule { }
