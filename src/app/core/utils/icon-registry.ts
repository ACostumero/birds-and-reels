import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class IconRegistry {

  private registry = new Map<string, string>;

  public registerIcon(iconName: string, path: string): void {
    this.registry.set(iconName, path);
  }

  public getIcon(iconName: string): string | undefined {
    if(!this.registry.has(iconName)) {
      console.warn(`Icon with name ${iconName} not found`);
    }
    return this.registry.get(iconName);
  }
}
