const Task = require("../models/Task");
const { getData, saveData } = require("../helpers/fileManager");

class TaskRepository {
  _tasks = null;

  constructor() {
    const data = getData();
    if (data) {
      this._tasks = data;
    } else {
      this._tasks = [];
    }
  }

  getAllTask() {
    return this._tasks.map((task) => {
      return { title: task.title, done: task.done, finished: task.finished };
    });
  }

  /**
   *
   * @param {String} title
   *
   * TODO: Nos falta persistir datos en archivo
   *
   */
  createTask(title) {
    const task = new Task(title);
    this._tasks.push(task);
    saveData(this._tasks);
  }

  deleteTask(id) {
    const newTask = this._tasks.filter(this._tasks.id !== id);
    return newTask;
  }

  completeTask() {}
}

module.exports = TaskRepository;
