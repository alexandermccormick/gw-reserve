import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

export interface ICanDeactivate {
    canDeactivate: () => boolean;
}

@Injectable()
export class CanDeactivateService implements CanDeactivate<ICanDeactivate> {

    canDeactivate(component:ICanDeactivate) {
        console.log(component);

        if (component.canDeactivate){
            return component.canDeactivate();
        }
        return true;
    }

}