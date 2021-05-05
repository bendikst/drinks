import { IObservableArray, observable } from "mobx";
import { Context, useContext } from "react";
import { StoreContext } from "../../context/context";

import { MockDrinks } from "../../mock/mockDrink";
import { RootStore } from "../../stores/rootStore";
import { Drink, IngredientList, MixingSteps } from "./model";

export class DrinksViewController {
    public data: DrinksViewData;
    public actions: DrinksViewActions;
    public properties: DrinksViewProperties;
    constructor(){ //TODO: control this again, take in data? Set timeout in controller or datathing?
        this.data =  new DrinksViewData(this);
        this.actions = new DrinksViewActions(this);
        this.properties = new DrinksViewProperties(this);

        this.data.startPolling();
    }
}

export class DrinksViewData {
    ctrl: DrinksViewController;
    data: IObservableArray<Drink> = observable.array([]);
    constructor(ctrl: DrinksViewController) {
        this.ctrl = ctrl;
    }

    public fetchData() { //TODO: get from backend.
        this.data.replace(MockDrinks);
    }

    public get() {
        return this.data;
    }

    public getDrink(id: string) {
        const found = this.data.find((v: Drink) => v.id === id);
        return found ? found : new Drink ("NOT FOUND, implement sth different", new IngredientList(), new MixingSteps(new Map(), new Set()))
    }

    public startPolling() {
        this.fetchData();
        setInterval(() => {
            this.fetchData();
            console.log("fetching data...");
        }, 10000)
    }
}

export class DrinksViewActions {
    ctrl: DrinksViewController;
    constructor(ctrl: DrinksViewController) {
        this.ctrl = ctrl;
    }

    /** TODO:
     * Save drinks
     * update drinks
     */
}

export class DrinksViewProperties {
    ctrl: DrinksViewController;
    // TODO: platform maybe? mobile or desktop?
    constructor(ctrl: DrinksViewController) {
        this.ctrl = ctrl;
    }
}