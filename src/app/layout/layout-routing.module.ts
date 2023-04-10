import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './container/layout.component';
import {PageNotFoundComponent} from "@app-shared/components/page-not-found/page-not-found.component";
import { ForbiddenComponent } from "@app-shared/components/forbidden/forbidden.component";
import { ErrorComponent } from "@app-shared/components/error/error.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'entry/:id', loadChildren: () => import('../features/entry/entry.module').then(m => m.EntryModule)},
      { path: 'not-found', component: PageNotFoundComponent},
      { path: 'forbidden', component: ForbiddenComponent},
      { path: 'error', component: ErrorComponent},
      { path: '', loadChildren: () => import('../features/categories/categories.module').then(m => m.CategoriesModule)},
      { path: '**', redirectTo: 'not-found'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
