import React from "react";
import { DrinksViewController } from "./controller";
import { Drink } from "./model";
import styled from 'styled-components';
import { ColorSet } from "../../resources/colors";
import DrinksListView from "./drinksListView";
import SingleDrinkView from "./singleview";
import { observe } from "mobx";
import { observer, Observer } from "mobx-react-lite";


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

const DRINKS_VIEW_WIDTH = '70%';

const DrinksViewWrapper = styled.nav`
    display: flex;
    width: ${DRINKS_VIEW_WIDTH};
    margin: 24px auto 16px;
    justify-content: space-between;
`;

export default class TopDrinksView extends React.Component {
    public ctrl: DrinksViewController;
    public drinksListView: DrinksListView;
    public singleDrinkView: SingleDrinkView;


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
                this.updateView();
            }
        });

        const view = observer(({}) => {
            return(
                <DrinksViewWrapper>
                    {drawElements}
                </DrinksViewWrapper>
            )
        });
        return view;
    }

    public updateView() {
        this.render();
    }

    render() {
        return this.initializeView();
    }
}