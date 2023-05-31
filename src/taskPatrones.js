class Authorization {
    checkAuthorization(user, task) {
      // Tu código aquí 👈
      if(task.users.includes(user)){
         return `El usuerio ${user} puede realizar la tarea`
      }else{
         return `El usuario ${user} no esta autorizado para realizar la tarea`
      }
    }
  }

  class TaskBuilder {
    constructor() {
       // Tu código aquí 👈
       this.id=undefined;
       this.description=undefined;
       this.completed=undefined;
       this.users=undefined;
       this.deadLine=undefined;
       this.priority=undefined;
    }
  
    setId(id) {
       // Tu código aquí 👈
       this.id=id;
    }
  
    setDescription(description) {
       // Tu código aquí 👈
       this.description=description;
    }
  
    setCompleted(completed) {
       // Tu código aquí 👈
       this.completed=completed;
    }
  
    setUsers(users) {
       // Tu código aquí 👈
       this.users=users
    }
  
    setDeadline(deadline) {
       // Tu código aquí 👈
       this.deadLine=deadline;
    }
  
    setPriority(priority) {
       // Tu código aquí 👈
       this.priority=priority;
    }
  
    build() {
      const task = new Task(this.id, this.description);
      this.users.forEach((user) => task.assignUser(user));
      task.deadline = this.deadline
      task.priority = this.priority
      return task;
   }
  }

  class TaskDecorator {
   constructor(task, options) {
      this.task = task;
      this.priority = "";
      this.deadline = "";
      this.checkDeadlineFormat(options.deadline);
      this.checkPriority(options.priority);
   }

   checkDeadlineFormat(deadline) {
      const regex = /\d{4}-\d{2}-\d{2}/;
      const isValidFormat = regex.test(deadline);
      if (isValidFormat) {
         this.deadline = deadline;
      } else {
         this.deadline = "2023-04-19";
      }
   }

   checkPriority(priority) {
      const options = ["high", "medium", "low", "alta", "media", "baja"];
      const isValidPriority = options.some(
         (option) => option == priority.toLowerCase()
      );
      if (isValidPriority) {
         this.priority = priority.toLowerCase();
      } else {
         this.priority = "baja";
      }
   }

   assignUser(user) {
      if (user instanceof User) {
         this.task.assignUser(user);
      } else {
         throw new Error("Debe pasar como parametro una instancia de User");
      }
   }


   completeTask() {
      this.task.completeTask();
   }

   notifyUsers() {
      this.task.notifyUsers();
   }
}


class TaskManager {
   constructor() {
     this.tasks = [];
   }
 
   static getInstance() {
     if (!TaskManager.instance) {
       TaskManager.instance = new TaskManager();
     }
     return TaskManager.instance;
   }
 
   addTask(task) {
     if (task instanceof Task) {
       this.tasks.push(task);
     } else {
       throw new Error("Debe pasar una instancia de task como parámetro");
     }
   }
 
   getTasks() {
     return this.tasks;
   }
 
   getTaskById(id) {
     const task = this.tasks.find((task) => task.id === id);
     return task ? task : null;
   }
 }
 
 

class User {
    constructor(name) {
       // Tu código aquí 👈
       this.name=name;
    }
  
    notify(task) {
       // Tu código aquí 👈
       console.log(`usuario ${this.name} se le ha asignado la tarea
       ${task}`)
    }
  }

  class Task{
    constructor(id, description){
       // Tu código aquí 👈
       if (Task.tasks[id]) {
         throw new Error(`La tarea con ID ${id} ya existe`);
       }
       this.id=id;
       this.description=description;
       this.completed=false;
       this.users=[];

    }
  
    assignUser(user){
     // Tu código aquí 👈
     this.users.push(user)
    }
  
    completeTask() {
       // Tu código aquí 👈
       this.completed=true;
       this.notifyUsers()
    }
  
    notifyUsers() {
       // Tu código aquí 👈
       for (let user of this.users) {
         console.log(`${user} la tarea que se asigno ha sido completada`)
       }
    }
  }