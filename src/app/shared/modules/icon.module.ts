import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconRegistry } from "@app-core/utils/icon-registry";


@NgModule({
  imports: [
    CommonModule
  ]
})
export class IconModule {
  private readonly _iconsPath: string = "../../../assets/icons/";

  private readonly _icons = [
    "heart",
    "menu-burger-horizontal",
    "menu-kebab",
    "mode-dark",
    "mode-light",
    "notification",
    "options",
    "profile",
    "question-mark-circle",
    "search",
    "sign-times-circle"
  ]

  constructor(public iconRegistry: IconRegistry) {
    this._icons.forEach(icon => this.iconRegistry.registerIcon(icon, `${this._iconsPath}${icon}.svg`));
  }
}
