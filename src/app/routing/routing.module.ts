import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { WelcomeComponent } from '../welcome/welcome.component';
import { RoomsComponent } from '../rooms/rooms.component';

const routes:Routes = [
  {
      path: "welcome",
      component: WelcomeComponent
  },
  {
    path: "rooms/:id",
    component: RoomsComponent
  },
  {
      path: "rooms",
      component: RoomsComponent
  },
  {
      path: "",
      redirectTo: "welcome",
      pathMatch: "full"
  },
  {
      path: "**",
      component: WelcomeComponent
  }
];

export const routingComponents = [WelcomeComponent, RoomsComponent]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }

