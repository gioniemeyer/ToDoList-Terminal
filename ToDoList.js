import readlineSync from 'readline-sync';

const tasks = [];
let arrayTasks =[];

function ToDo() {
    const options = ['add', 'list', 'remove'];
    let index = readlineSync.keyInSelect(options, 'Type your command ');
   
    if (index === 0) {
        const item = readlineSync.question('What do you want to do? ');
        tasks.push({text: item, done: false});
        arrayTasks = tasks.map(i => i.text);
        ToDo();
    }
    
    if(index === 1) {
        if(tasks.length === 0) ToDo();
        for(let i = 0; i < tasks.length; i++) {
            (tasks[i].done ? arrayTasks[i] = `🟢 ${tasks[i].text}` : arrayTasks[i] = `🔴 ${tasks[i].text}`);
        }
        const indexList = readlineSync.keyInSelect(arrayTasks, 'What do you want to check/uncheck? ');
            if (indexList !== -1) {
            tasks[indexList].done = !tasks[indexList].done;
            } 
        ToDo();
    }
    
    if(index === 2) {
        for(let i = 0; i < tasks.length; i++) {
            (tasks[i].done ? arrayTasks[i] = `🟢 ${tasks[i].text}` : arrayTasks[i] = `🔴 ${tasks[i].text}`);
        }
        const indexList = readlineSync.keyInSelect(arrayTasks, 'What do you want to remove? ');
        if (indexList !== -1) {
        tasks.splice(indexList, 1);
        }
        ToDo();
    }

    if(index === -1) return'';

}

ToDo();
