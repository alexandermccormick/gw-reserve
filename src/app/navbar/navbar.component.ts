import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";

interface INavLinks {
  title:string,
  url:string
}


@Component({
  selector: 'gw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  public navLinks:INavLinks[];
  
    constructor() {
  
      this.navLinks = [
        {
          title: 'Welcome',
          url: 'welcome'
        },
        {
          title: 'Rooms',
          url: 'rooms'
        },
        {
          title: 'Room2',
          url: 'rooms/12'
        },
        {
          title: 'Room3',
          url: 'rooms/15'
        }
      ]
    }
  
    showUrl(url){
      alert(url);
    }
  
 
}
