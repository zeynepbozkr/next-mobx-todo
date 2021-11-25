import { makeAutoObservable, action, runInAction } from "mobx";
// import userAPI from "../api/user.api";
// import StoreProvider from "../utils/store-provider.js";

class UserStore {
  test = [];

  constructor() {
    makeAutoObservable(this);
  }

  at(value) {
    runInAction(() => {
      this.test = [...this.test, value];
    });
    console.log("AT");
  }
}

export default new UserStore();
