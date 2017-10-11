import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { NavbarComponent } from './navbar/navbar.component';
import { RoutingModule, routingComponents } from "./routing/routing.module";
import { LoginComponent } from './login/login.component';

import { LoginService } from "./services/login.service";




@NgModule({
    imports: [
        BrowserModule,
        RoutingModule
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        routingComponents,
        LoginComponent
    ],
    providers: [
        LoginService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }