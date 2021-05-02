import { IUserStore, UserStore } from "./userStore";
import { AuthStore } from "./authStore";

export interface IRootStore {
    authStore: AuthStore;
    userStore: UserStore;
}

export class RootStore implements IRootStore {
    authStore: AuthStore;
    userStore: UserStore;

    constructor() {
        this.authStore = new AuthStore();
        this.userStore = new UserStore(this);
    }
}