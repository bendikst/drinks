import { observable } from "mobx";
import * as uuid from "uuid";

export interface IAuthStore {
    id: string;
}

export class AuthStore implements IAuthStore{
    @observable id: string;

    constructor() {
        this.id = uuid.v4();
    }

};