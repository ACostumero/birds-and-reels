import { Component, Input, OnDestroy, ViewEncapsulation } from '@angular/core';
import { IconRegistry } from "@app-core/utils/icon-registry";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { HttpClient } from "@angular/common/http";
import { map, Observable, Subject, switchMap, takeUntil, tap } from "rxjs";
import { Color } from "@app-core/types/color.type";

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SvgIconComponent implements OnDestroy {
  private _destroySubscriptions$: Subject<void> = new Subject<void>();
  private _iconUrlSource: Subject<string> = new Subject<string>();
  private _iconSource: Subject<SafeHtml> = new Subject<SafeHtml>();

  public iconUrl$ = this._iconUrlSource.asObservable();
  public icon$ = this._iconSource.asObservable();

  private readonly DEFAULT_SIZE = 24;

  @Input() size: number = this.DEFAULT_SIZE;
  @Input() fill?: Color;
  @Input() color?: Color;

  @Input()
  set name(iconName: string) {
    const iconPath = this._iconRegistry.getIcon(iconName);
    if (!iconPath) return;
    this._setIconUrl(iconPath);
  }

  constructor(
    private readonly _iconRegistry: IconRegistry,
    private readonly _httpClient: HttpClient,
    private readonly _sanitizer: DomSanitizer) {
    this.iconUrl$.pipe(
      takeUntil(this._destroySubscriptions$),
      switchMap((url: string) => this._getSvgFromUrl(url)),
      map(svg => this._sanitizer.bypassSecurityTrustHtml(svg)),
      tap(htmlIcon => this._setHtmlIcon(htmlIcon))
    ).subscribe();
  }

  private _getSvgFromUrl(url: string): Observable<string> {
    return this._httpClient.get(url, {responseType: 'text'})
  }

  private _setHtmlIcon(htmlIcon: SafeHtml) {
    this._iconSource.next(htmlIcon);
  }

  private _setIconUrl(url: string) {
    this._iconUrlSource.next(url);
  }

  ngOnDestroy(): void {
    this._destroySubscriptions$.next();
  }

}
