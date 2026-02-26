#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
program
    .command('greet veer')
    .action((name) => {
    console.log(`Hello ${name}!`);
});
program
    .command("add <n1> <n2>")
    .action((n1, n2) => {
    const sum = Number(n1) + Number(n2);
    console.log(sum);
});
program
    .command("multiply <n1> <n2>")
    .action((n1, n2) => {
    const multiply = Number(n1) * Number(n2);
    console.log(multiply);
});
program
    .command("divide <n1> <n2>")
    .action((n1, n2) => {
    const divide = Number(n1) / Number(n2);
    console.log(divide);
});
program
    .command("floor <n1> <n2>")
    .action((n1, n2) => {
    const floor = Math.floor(Number(n1) / Number(n2));
    console.log(floor);
});
program
    .command("ceil <n1> <n2>")
    .action((n1, n2) => {
    const ceil = Math.ceil(Number(n1) / Number(n2));
    console.log(ceil);
});
program.parse();
