require("colors");
const { confirm, inquirerMenu, pause, readInput, listTaskDelete, showListChecklist } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");

console.clear();

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const taskDB = readDB();

  if(taskDB){
    tasks.uploadTasksFromArray(taskDB)
  }
  //await pause();
  
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case "1":
        const desc = await readInput("Descripcion: ");
        tasks.createTask(desc);
        break;
      case "2":
        tasks.listCompleted();
        break;
      case "3":
        tasks.listCompletedPending(true);
        break;
      case "4":
        tasks.listCompletedPending(false);
        break;
      case "5":
        const ids = await showListChecklist(tasks.listArr)
        tasks.toggleCompleted(ids)
        break;
      case "6":
        const id = await listTaskDelete(tasks.listArr);
        const confirmDelete = await confirm('¿Esta seguro de Borrar?')
        if(id !== '0'){
          if(confirmDelete){
            tasks.deleteTask(id)
            console.log("tarea borrada");
          }
        }
        break;

      default:
        break;
    }

    saveDB(tasks.listArr);

    await pause();
  } while (opt !== "0");
};

main();
