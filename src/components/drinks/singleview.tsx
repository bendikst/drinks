import React from "react";
import { DrinksViewController } from "./controller";
import { Drink, DrinkIngredient, Language } from "./model";
import styled from 'styled-components';
import { autorun, makeObservable, observable, action, reaction } from "mobx";
import { ColorSet } from "../../resources/colors";
import { observer } from "mobx-react";


const WidgetWrapper = styled.div`
    display: flex;
    padding: 3em;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background: ${ColorSet.BLUE_GROTTO};
    border: 1px solid black;
    border-radius: 1px;
    flex: 3;
`;

@observer
export default class SingleDrinkView extends React.Component {
    public ctrl: DrinksViewController;
    @observable public drink: Drink | undefined;

    constructor(props: any, ctrl: DrinksViewController, drink?: Drink) {
        super(props);
        makeObservable(this, {
            drink: observable,
            updateDrink: action
        })
        this.ctrl = ctrl;
        this.drink = drink;
    }

    public initializeView(): JSX.Element {
        let drawElements: JSX.Element[] = [];
        
        if(this.drink) {
            drawElements.push(<h1>{this.drink.name}</h1>);
            drawElements.push(<div>{this.drink.ingredients.spirits.map((ingredient: DrinkIngredient) => <ul>{ingredient.ingredient}: {ingredient.amount} {ingredient.unit}</ul>)}</div>);
            drawElements.push(<div>{this.drink.ingredients.secondaries.map((ingredient: DrinkIngredient) => <ul>{ingredient.ingredient}: {ingredient.amount} {ingredient.unit}</ul>)}</div>);
            drawElements.push(<div>{this.drink.steps.steps.get(Language.NOR)?.map(step => <ul>{step}</ul>)}</div>);
        }
        else {
            drawElements.push(<b>No drink selected.</b>);
        }
        return (
        <WidgetWrapper>
            <ul>{drawElements}</ul>
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