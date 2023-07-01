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

  listCompleted(){
    this.listArr.forEach((task, i) => {
      const index = `${i + 1}`.green;
      const {desc, completadoEn} = task;
      const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
      console.log(`${index} ${desc}: ${estado}`);
    })
  }

  listCompletedPending(completed = false){
    let contador = 0;
    this.listArr.forEach((task, i ) => {
      const index = `${i + 1}`.green;
      const {desc, completadoEn} = task;
      const estado = (completadoEn) ? 'Completado'.green : 'Pendiente'.red;
      if(completed === true){
        if(completadoEn){
          contador += 1;
          console.log(`${(contador + '.').green} ${desc}: ${completadoEn}`);
        }
      } else {
        if(!completadoEn){
          contador += 1;
          console.log(`${(contador + '.').green} ${desc}: ${estado}`);
        }
      }
    })
  }

  deleteTask( id = ''){
    if(this._list[id]){
      delete this._list[id];
    }
  }

  toggleCompleted(ids = []){
    ids.forEach(id => {
      const task = this._list[id];
      if(!task.completadoEn){
        task.completadoEn = new Date().toISOString();
      }
    })

    this.listArr.forEach((task)  =>{
      if(!ids.includes(task.id)){
        this._list[task.id].completadoEn = null
        // task.completadoEn = null

      }
    })
  }

}

module.exports = Tasks;
