import React from "react";
import { DrinksViewController } from "./controller";
import { Drink } from "./model";
import styled from 'styled-components';
import { autorun, makeObservable, observable, action } from "mobx";


const WidgetWrapper = styled.div`
    display: flex;
    padding: 3em;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: papayawhip;
    border: 2px solid black;
    border-radius: 3px;
    width: 17em;
`;

export default class SingleDrinkView extends React.Component {
    public ctrl: DrinksViewController;
    public drink: Drink | undefined;

    constructor(props: any, ctrl: DrinksViewController, drink?: Drink) {
        super(props);
        makeObservable(this, {
            drink: observable,
            updateDrink: action
        })
        this.ctrl = ctrl;
        this.drink = drink;
        autorun(() => {
            console.log("New drink: ", this.drink?.name)
            this.initializeView();
        });
    }

    public initializeView(): JSX.Element {
        let drawElements: JSX.Element[] = [];
        if(this.drink) {
            drawElements.push(<b>{this.drink.name}</b>);
            drawElements.push(<b>{this.drink.ingredients}</b>);
            drawElements.push(<b>{this.drink.steps}</b>);
        }
        else {
            drawElements.push(<b>No drink selected.</b>);
        }
        return (
        <WidgetWrapper>
            {drawElements}
        </WidgetWrapper>
        )
    }

    render(): JSX.Element {
        return this.initializeView();
    }

    updateDrink(drink: Drink) {
        this.drink = drink;
    }
}