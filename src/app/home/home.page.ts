import { Component } from '@angular/core';
import { GlobalService } from '../services/global.service'; // Adjust the path as necessary


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private globalService: GlobalService) {
    (window as any).myAppGlobalService = globalService;
  }



}
