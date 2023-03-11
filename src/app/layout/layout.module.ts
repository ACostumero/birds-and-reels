import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './container/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavRightComponent } from './components/sidenav-right/sidenav-right.component';
import { NavigationComponent } from '@app-layout/components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from "@app-shared/modules/shared.module";


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavRightComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule,
  ],
  exports: [SharedModule]
})
export class LayoutModule {
}
