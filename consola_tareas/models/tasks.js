const Task = require("./task");

/**
 * _list:
 *  {'uuid: {id: 12, desc: name, completadoEn: 9123}' }
 */
class Tasks {
  _list = {};

  get listArr() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  constructor() {
    this._list = {};
  }

  uploadTasksFromArray(tasks = []){
    tasks.forEach(task =>{
      this._list[task.id] = task;
    })
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  listComplete(){
    this.listArr.forEach((task, i) => {
      const index = `${i + 1}`.green;
      const {desc, completadoEn} = task;
      const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
      console.log(`${index} ${desc}: ${estado}`);
    })

  }
}

module.exports = Tasks;
