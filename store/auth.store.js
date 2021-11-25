import { action, makeAutoObservable } from "mobx";
// import authAPI from "../api/auth.api";
// import StorageService from "../utils/storage";

class AuthStore {
  accessToken = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new AuthStore();
