import { observable, action } from 'mobx';
import * as uuid from "uuid";
import { RootStore } from "./rootStore";

export interface IUserStore {
    id: string;
    name?: string;
    picture?: string;
}


export class UserStore implements IUserStore {
    private rootStore: RootStore;

    @observable id = uuid.v4();
    @observable name = '';
    @observable picture = '';

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }

    @action getName = (name: string): void => {
        if (this.rootStore.authStore.id) {
            this.name = name; 
        }
    }
}