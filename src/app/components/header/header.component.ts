import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public dataserv:DataService){

  }

}
