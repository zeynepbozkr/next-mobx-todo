import StoreProvider from "../utils/store-provider.js";
import AuthStore from "./auth.store";
import UserStore from "./user.store";
import TodoStore from "./todo.store";

export const stores = {
  AuthStore,
  UserStore,
  TodoStore,
};

Object.keys(stores).forEach((store) => {
  StoreProvider.addStore(store, stores[store]);
});
