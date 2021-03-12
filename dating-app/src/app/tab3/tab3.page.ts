import { Component, Input } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @Input() user = new User();

  constructor() {}

}
