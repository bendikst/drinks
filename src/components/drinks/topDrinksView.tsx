import React from "react";
import { DrinksViewController } from "./controller";
import { Drink } from "./model";
import styled from 'styled-components';
import { ColorSet } from "../../resources/colors";
import DrinksListView from "./drinksListView";
import SingleDrinkView from "./singleview";
import { observable, observe } from "mobx";
import { observer } from "mobx-react";
import { RootStore } from "../../stores/rootStore";


const DRINKS_VIEW_WIDTH = '100%';

const DrinksViewWrapper = styled.div`
    display: flex;
    width: ${DRINKS_VIEW_WIDTH};
    bottom: 0;
    top: 5em;
    position: absolute;
`;

@observer
export default class TopDrinksView extends React.Component/*<{store: RootStore}, any>*/ {
    public ctrl: DrinksViewController;
    @observable public drinksListView: DrinksListView;
    @observable public singleDrinkView: SingleDrinkView;


    constructor(props: any) {
        super(props);
        this.ctrl = new DrinksViewController();
        this.drinksListView = new DrinksListView(this.props, this.ctrl);
        this.singleDrinkView = new SingleDrinkView(this.props, this.ctrl);
    }

    public initializeView() {
        
        let drawElements: JSX.Element[] = []
        
        drawElements.push(this.drinksListView.initializeView());
        drawElements.push(this.singleDrinkView.initializeView());

        observe(this.drinksListView.selected, (change) => {
            if(change.type === "splice"){
                this.singleDrinkView.updateDrink(this.ctrl.data.getDrink(change.added[0]));
                //this.updateView();
            }
        });

        const view = (
            <DrinksViewWrapper>
                {drawElements}
            </DrinksViewWrapper>
            )
        return view;
    }

    render() {
        return this.initializeView();
    }
}