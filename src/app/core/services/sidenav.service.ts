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
    this._closeUserMenu();
    this._isAppMenuOpened = !this._isAppMenuOpened;
    this._appMenuToggleSource.next(this._isAppMenuOpened)
  }

  private _closeAppMenu() {
    this._isAppMenuOpened = false;
    this._appMenuToggleSource.next(this._isAppMenuOpened);
  }

  private _closeUserMenu() {
    this._isUserMenuOpened = false;
    this._userMenuToggleSource.next(this._isUserMenuOpened)
  }

  public toggleUserMenu() {
    this._closeAppMenu();
    this._isUserMenuOpened = !this._isUserMenuOpened;
    this._userMenuToggleSource.next(this._isUserMenuOpened)
  }

  public closeByBackdrop() {
    this._isAppMenuOpened ? this.toggleAppMenu() : this.toggleUserMenu();
  }
}
