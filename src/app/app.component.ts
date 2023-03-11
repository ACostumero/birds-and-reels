import { Component } from '@angular/core';
import { appName } from "@app-core/constants/env.const";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = appName;
}
