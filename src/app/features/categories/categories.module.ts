import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from "@app-features/categories/container/categories.component";
import { CategoriesRoutingModule } from "@app-features/categories/categories-routing.module";
import { CategoryComponent } from './pages/category/category.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
