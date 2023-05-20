import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {TTheme, TThemeIcon} from "@app-core/types/theme.type";
import {Color} from "@app-core/types/color.type";
import {TThemeConfig} from "@app-core/interfaces/theme.interface";



@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _currentTheme: TTheme = 'light';

  private _themeIcons: TThemeIcon = {
    light: 'mode-light',
    dark: 'mode-dark',
  }
  constructor(@Inject(DOCUMENT) private _document: Document) { }

  public setTheme(theme: TTheme): void {
    this._setTheme(theme);
    this._updateDocumentThemeClass();
  }

  public toggleTheme(): void {
    this._currentTheme === 'light' ? this.setTheme('dark') : this.setTheme('light');
  }

  public getTheme(): TTheme {
    return this._currentTheme;
  }

  public getIcon(): string {
    return this._themeIcons[this._currentTheme];
  }

  private _updateDocumentThemeClass(): void {
    this._document.documentElement.classList.toggle('dark', this._currentTheme === 'dark');
  }

  private _setTheme(theme: TTheme): void {
    this._currentTheme = theme;
  }

  public getColor(key: keyof TThemeConfig): Color {
    const cssName: string = `--${key}`;
    return getComputedStyle(this._document.documentElement).getPropertyValue(cssName) as Color;
  }

}
