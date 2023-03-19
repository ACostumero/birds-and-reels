import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './container/layout.component';
import {PageNotFoundComponent} from "@app-shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'entry/:id', loadChildren: () => import('../features/entry/entry.module').then(m => m.EntryModule)},
      { path: 'not-found', component: PageNotFoundComponent},
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
