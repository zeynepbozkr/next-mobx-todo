import { action, makeAutoObservable, runInAction } from "mobx";

class TodoStore {
  todos = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(value) {
    runInAction(() => {
      this.todos = [...this.todos, value];
    });
  }

  checkTodo(title) {
    const changedObject = this.todos.find((x) => x.title === title);
    const index = this.todos.indexOf(changedObject);
    runInAction(() => {
      this.todos[index].isChecked = !this.todos[index].isChecked;
    });
  }

  editTodo(title, change) {
    const editObje = this.todos.find((x) => x.title === title);
    const editIndex = this.todos.indexOf(editObje);
    this.todos[editIndex].title = change;
    console.log(this.todos[editIndex].title, "new");
  }

  removeAdd(title) {
    const removeObje = this.todos.find((x) => x.title === title);
    const removeIndex = this.todos.indexOf(removeObje);
    this.todos.splice(removeIndex, 1);
  }
}

export default new TodoStore();
