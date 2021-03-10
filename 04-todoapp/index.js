const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const { getAllTask, createTask } = require("./service/fileService");

const main = async () => {
  // const taskRepository = new TaskRepository();
  let option = "";

  do {
    option = await inquirerMenu();
    switch (option) {
      case 1:
        // TODO: Hacer que el usuario pueda ingresar el titulo de la tarea
        const title = await inquirerInput("Task Title: ");

        createTask(title);

        break;

      case 2:
        // TODO: Mostar la lista de tareas de la BBDD
        const allTask = getAllTask();
        console.log(allTask);

        break;

      case 3:
        const deletedTask = taskRepository.deleteTask(id);
        console.log(deletedTask);
    }
  } while (option !== 0);
};

main();
