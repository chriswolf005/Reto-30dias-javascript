function createTaskPlanner() {
    // Tu código aquí 👈
    const task=[];
    function addTask(object){
     task.push(object)
     return task;
    }
    function removeTask(id){
     let index=task.findIndex(item=>item.id===id)
     if(index !==-1){
        task.splice(index,1)
     }
     return task;
     
    }
    function getTask(){
        return task;
    }
    function getPedingTask(){
    let pendiente=task.filter(item=>item.completed===false)
    return pendiente;

    }
    function getCompletedTasks(){
        let completadas=task.filter(item=>item.completed===true)
        return completadas;
    }
    function markTaskCompleted(id){
        let completar=task.filter(item=>item.id===id);
        completar.completed=true;
        return completar;
    }
    function getSortedTasksByPriority(){
        let orden=  task.sort(function(a,b){
            return a.priority - b.priority
        })
        return orden;
    }

    return{
        addTask,
        removeTask,
        getTask,
        getPedingTask,
        getCompletedTasks,
        markTaskCompleted,
        getSortedTasksByPriority,
    }
  }


  const planner = createTaskPlanner();
  
 console.log( planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
}));

planner.addTask({
    id: 2,
    name: "Llamar a Juan",
    priority: 3,
    tags: ["personal"]
})

planner.addTask({
    id: 3,
    name: "canta",
    priority: 3,
    tags: ["personal"]
})

planner.addTask({
    id: 1,
    name: "baila",
    priority: 3,
    tags: ["personal"]
})


planner.addTask({
    id: 5,
    name: "comer",
    priority: 3,
    tags: ["personal"],
    completed: false,
})


planner.addTask({
    id: 6,
    name: "barrer",
    priority: 3,
    tags: ["personal"],
    completed: true,
})

planner.addTask({
    id: 7,
    name: "fregar",
    priority: 1,
    tags: ["personal"],
    completed: true,
})








