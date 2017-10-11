import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'gw-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  public linkID;

  constructor(
    private activeRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    console.log('Room component loaded');

    // do this when you know the user won't change your url
    console.log('Snapshot', this.activeRoute.snapshot.paramMap.get('id'));

    this.activeRoute.paramMap.subscribe((parameters:ParamMap) => {
      this.linkID = parameters.get('id');
    });
    
  }

}
