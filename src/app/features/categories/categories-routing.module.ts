import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from "@app-features/categories/container/categories.component";
import { CategoryComponent } from "@app-features/categories/pages/category/category.component";
import { CategoryResolver } from "@app-core/resolvers/category.resolver";

const routes: Routes = [
  { path: 'categories' , pathMatch: 'full', component: CategoriesComponent},
  { path: 'category/:name', component: CategoryComponent, resolve: { items: CategoryResolver } },
  { path: '', redirectTo: 'categories', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
