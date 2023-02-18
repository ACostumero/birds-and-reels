import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './container/layout.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from '@app-shared/modules/material.module';
import { SidenavRightComponent } from './components/sidenav-right/sidenav-right.component';
import { SidenavLeftComponent } from './components/sidenav-left/sidenav-left.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidenavRightComponent,
    SidenavLeftComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialModule,
  ],
  exports: [MaterialModule]
})
export class LayoutModule {
}
