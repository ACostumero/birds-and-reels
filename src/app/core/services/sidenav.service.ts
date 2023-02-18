import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private _isAppMenuOpened: boolean = false;
  private _isUserMenuOpened: boolean = false;

  private _appMenuToggleSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._isAppMenuOpened);
  private _userMenuToggleSource: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this._isUserMenuOpened);

  public appMenuToggle$: Observable<boolean> = this._appMenuToggleSource.asObservable();
  public userMenuToggle$: Observable<boolean> = this._userMenuToggleSource.asObservable();

  public toggleAppMenu() {
    this._isUserMenuOpened = false;
    this._isAppMenuOpened = !this._isAppMenuOpened;
    this._appMenuToggleSource.next(this._isAppMenuOpened)
  }

  public toggleUserMenu() {
    this._isAppMenuOpened = false;
    this._isUserMenuOpened = !this._isUserMenuOpened;
    this._userMenuToggleSource.next(this._isUserMenuOpened)
  }

  public closeByBackdrop() {
    this._isAppMenuOpened ? this.toggleAppMenu() : this.toggleUserMenu();
  }
}
