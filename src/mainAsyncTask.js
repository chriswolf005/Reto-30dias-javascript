import { doTask1, doTask2, doTask3 } from './asyncTask';

export async function runCode(){
    const strings=[];
    const rta1 = await doTask1();
    const rta2 = await doTask2();
    const rta3 = await doTask3();
    return [rta1, rta2, rta3];
}