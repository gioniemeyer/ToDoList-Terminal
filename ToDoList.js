import readlineSync from 'readline-sync';

const tasks = [];

function ToDo() {
    const options = ['add', 'list', 'remove'];
    let index = readlineSync.keyInSelect(options, 'Type your command ');

while(index !== 3) {
   
    if (index === 0) {
        const item = readlineSync.question('What do you want to do? ');
        tasks.push(`🔴 ${item}`);
    } 
    if(index === 1) {
        for(let i = 0; i < tasks.length; i++) {
        }
        const indexList = readlineSync.keyInSelect(tasks, 'What do you want to check/uncheck? ');
        const selected = tasks[indexList];
        tasks.splice(0, indexList, `🟢 ${selected}`)
        for(let i = 0; i < tasks.length; i++) {
        }
    }
    if(index === 2) {
        const indexList = readlineSync.keyInSelect(tasks, 'What do you want to check/uncheck? ');
        tasks.splice(indexList,1);
    }
    index = readlineSync.keyInSelect(options, 'Type your command ');

}}

ToDo()