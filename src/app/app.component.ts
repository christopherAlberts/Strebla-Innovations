import { Component, Injector } from '@angular/core';
import { GlobalService } from './services/global.service'; // Adjust the path as necessary

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(injector: Injector, public globalService: GlobalService) {
    (window as any).myAppGlobalService = this.globalService;
  }


  
}

// USE THE BELOW COMMAND TO SET godemode:
// -------------------------------------------
// window.myAppGlobalService.godMode = true
// -------------------------------------------