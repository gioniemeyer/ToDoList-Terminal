import readlineSync from 'readline-sync';

const tasks = [];

function ToDo() {
    const options = ['add', 'list', 'remove'];
    let index = readlineSync.keyInSelect(options, 'Type your command ');
   
    if (index === 0) {
        const item = readlineSync.question('What do you want to do? ');
        tasks.push({text: item, done: false});
        ToDo();
    }
    
    if(index === 1) {
        for(let i = 0; i < tasks.length; i++) {
            console.log(tasks[i].done ? `🟢 ${tasks[i].text}` : `🔴 ${tasks[i].text}`);
        }
        const indexList = readlineSync.keyInSelect(tasks, 'What do you want to check/uncheck? ');
            if (indexList !== 0) {
            tasks[indexList].done = !tasks[indexList].done;
            } 
        ToDo();
    }
    
    if(index === 2) {
        for(let i = 0; i < tasks.length; i++) {
            console.log(tasks[i].done ? `🟢 ${tasks[i].text}` : `🔴 ${tasks[i].text}`);
        }
        const indexList = readlineSync.keyInSelect(tasks, 'What do you want to remove? ');

        tasks.splice(indexList, 1);
        ToDo();
    }

    if(index === 3) { ending() }

}

ToDo();

function ending() {
    return('');
}