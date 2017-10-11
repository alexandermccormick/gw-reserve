import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { ICanDeactivate } from "../services/canDeactivate.service";

@Component({
  selector: 'gw-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit, ICanDeactivate {
  public linkID;
  public canThisDeactivate;

  constructor(private activeRoute:ActivatedRoute) {
    this.canThisDeactivate = true;
  }

  toggleCanDeactivate() {
    this.canThisDeactivate = !this.canThisDeactivate;
  }
  canDeactivate() {
    return this.canThisDeactivate;
  }

  ngOnInit() {
    console.log('Room component loaded');

    // do this when you know the user won't change your url
    console.log('Snapshot', this.activeRoute.snapshot.paramMap.get('id'));

    this.activeRoute.paramMap.subscribe((parameters:ParamMap) => {
      this.linkID = parameters.get('id');
    });
    
  }

}
