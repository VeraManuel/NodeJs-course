const TaskRepository = require("../repositories/TaskRespository");
const taskRepository = new TaskRepository();

const getAllTask = () => {
  const task = taskRepository.getAllTask();
  return task.map((e) => {
    return { title: e.title, done: e.done };
  });
};

const createTask = (title) => {
  taskRepository.createTask(title);
};

module.exports = {
  getAllTask,
  createTask,
};
