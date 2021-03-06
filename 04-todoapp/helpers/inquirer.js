const inquirer = require("inquirer");
const colors = require("colors");

const inquirerMenu = async () => {
  console.log("==========================".blue);
  console.log("Select an option!".white);
  console.log("==========================".blue);

  const menu = [
    {
      type: "list",
      name: "option",
      message: "What do you want to do?",
      choices: [
        {
          value: 1,
          name: `${"1 -".blue} Create task`,
        },
        {
          value: 2,
          name: `${"2 -".blue} Get tasks`,
        },
        {
          value: 0,
          name: `${"0 -".blue} Salir`,
        },
      ],
    },
  ];

  const { option } = await inquirer.prompt(menu);

  return option;
};

const inquirerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
    },
  ];

  const { description } = await inquirer.prompt(question);

  return description;
};

module.exports = {
  inquirerMenu,
  inquirerInput,
};
