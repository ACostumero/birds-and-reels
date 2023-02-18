import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";


@NgModule({
  imports: [
    CommonModule
  ]
})
export class IconModule {
  private readonly _iconsPath: string = "../../../assets/icons/";

  private readonly _icons = [
    "alert-circle",
    "alert-triangle",
    "align-justify",
    "arrow-left",
    "arrow-narrow-right",
    "bell",
    "bell-ringing",
    "bookmark",
    "camera-lens",
    "check",
    "check-verified",
    "chevron-left",
    "chevron-right",
    "chevron-up",
    "chevron-down",
    "cross",
    "dots-grid",
    "dots-vertical",
    "expand",
    "expand-2",
    "feather",
    "filter-funnel",
    "flip-backward",
    "heart-rounded",
    "help-circle",
    "home",
    "image",
    "image-user",
    "lightbulb",
    "lock",
    "lock-rounded",
    "lock-unlocked",
    "lock-unlocked-rounded",
    "log-in",
    "marker-pin",
    "menu",
    "moon",
    "search",
    "settings",
    "share",
    "star",
    "sun"
  ]

  constructor(
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry) {
    this._icons.forEach(icon => this.matIconRegistry.addSvgIcon(icon, this._setPath(icon)));
  }

  private _setPath(iconName: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${this._iconsPath}${iconName}.svg`);
  }
}
