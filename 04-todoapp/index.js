const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const TaskRepository = require("./repositories/TaskRespository");

const main = async () => {
  const taskRepository = new TaskRepository();
  let option = "";

  do {
    option = await inquirerMenu();
    switch (option) {
      case 1:
        // TODO: Hacer que el usuario pueda ingresar el titulo de la tarea
        const title = await inquirerInput("Task Title: ");

        taskRepository.createTask(title);

        break;

      case 2:
        // TODO: Mostar la lista de tareas de la BBDD
        const allTask = taskRepository.getAllTask();
        console.log(allTask);

        break;
    }
  } while (option !== 0);
};

main();
