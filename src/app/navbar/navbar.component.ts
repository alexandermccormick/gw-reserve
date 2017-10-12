import { Component, OnInit } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { trigger, state, style, animate, transition } from '@angular/animations';

interface INavLinks {
  title:string,
  url:string
}


@Component({
  selector: 'gw-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('btnHoverState', [
      state('inactive', style({
        display: 'inline-block',
        color: '#1EAEDB',
        border: '1px solid #1EAEDB',
        borderRadius: '0.3rem',
        transform: 'scale(1)'
      })),
      state('active',   style({
        display: 'inline-block',
        color: '#1EAEDB',
        border: '1px solid #1EAEDB',
        borderRadius: '0.3rem',
        transform: 'scale(1.3)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ]),
    trigger('spanHoverState', [
      state('inactive', style({
        position: 'absolute',
        bottom: '25%',
        width: '0',
        height: '0'
      })),
      state('active',   style({
        height: '1px',
        width: '50%',
        background: '#1EAEDB'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))
    ])
  ]
})
export class NavbarComponent {

  public navLinks:INavLinks[];
  public state = 'inactive';
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

    toggleState() {
      this.state = this.state === 'active' ? 'inactive' : 'active';
    }
  
 
}
