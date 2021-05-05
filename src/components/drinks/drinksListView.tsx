import { observable, makeObservable, IObservableArray, autorun } from "mobx";
import { observer } from "mobx-react";
import React, { useState, Children } from "react";
import styled from 'styled-components';
import { ColorSet } from "../../resources/colors";
import { DrinksViewController } from "./controller";
import { Drink } from "./model";
import SingleDrinkView from "./singleview";

const DrinkListWrapper = styled.ul`
    display: flex;
    flex-wrap: wrap;
    background-color: ${ColorSet.SIDE};
    border: 1px solid black;
    border-radius: 1px;
    flex: 1;
    width: 100%;
`;

const DrinkListEntryWrapper = styled.li`
    color: ${ColorSet.TEXT};
    display: inline-block;
    padding: 3em;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    background: ${ColorSet.SIDE};
    border: 1px solid black;
    border-radius: 1px;
    width: 100%;

    &:hover {
        color: ${ColorSet.ACCENT}
    }
`;

@observer
export default class DrinksListView extends React.Component {
    public ctrl: DrinksViewController;
    @observable public selected: IObservableArray<string> = observable.array([]);
    constructor(props: any, ctrl: DrinksViewController) {
        super(props);
        // makeObservable(this, {
        //     selected: observable
        //     // actions/computed? 
        // });
        //this.ctrl = ctrl;
        this.ctrl = new DrinksViewController();
    }

    public handleClick(e: any, id: string) {
        this.selected.replace([id]);
        console.log(this.selected.toString())
    }

    public initializeView(){
        const tempdrinklist = this.ctrl.data.get().map((v: Drink) => 
        <DrinkListEntryWrapper id={v.id} onClick={(e) => this.handleClick(e, v.id)}>{v.name}</DrinkListEntryWrapper>
        );

        return (
            <DrinkListWrapper>
                <ul>{tempdrinklist}</ul>
            </DrinkListWrapper>
        );
    }

    render(){
        return this.initializeView();
    }
}