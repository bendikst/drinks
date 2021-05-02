import { observable, makeObservable, IObservableArray, autorun } from "mobx";
import React, { useState, Children } from "react";
import styled from 'styled-components';
import { ColorSet } from "../../resources/colors";
import { DrinksViewController } from "./controller";
import { Drink } from "./model";
import SingleDrinkView from "./singleview";

const WidgetWrapper = styled.div`
    display: flex;
    padding: 3em;
    flex-wrap: wrap;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
    background: papayawhip;
    border: 2px solid black;
    border-radius: 3px;
    width: 17em;

    &:hover {
        color: ${ColorSet.BLUE_GROTTO}
    }
`;

export default class DrinksListView extends React.Component {
    public ctrl: DrinksViewController;
    public selected: IObservableArray<string> = observable.array([]);
    constructor(props: any, ctrl: DrinksViewController) {
        super(props);
        makeObservable(this, {
            selected: observable
            // actions/computed? 
        });
        this.ctrl = ctrl;
    }

    public handleClick(e: any, id: string) {
        this.selected.replace([id]);
        console.log(this.selected.toString())
    }

    public initializeView(): JSX.Element{
        const tempdrinklist = this.ctrl.data.get().map((v: Drink) => 
        <WidgetWrapper id={v.id} onClick={(e) => this.handleClick(e, v.id)}>{v.name}</WidgetWrapper>
        );

        return (
            <ul>{tempdrinklist}</ul>
        );
    }

    render(): JSX.Element {
        return this.initializeView();
    }
}