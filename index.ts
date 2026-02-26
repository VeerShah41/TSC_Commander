#!/usr/bin/env node
const {Command} = require('commander');

const program = new Command();
program
.command('greet veer')
.action((name)=>{
    console.log(`Hello ${name}!`);
})
program
.command("add <n1> <n2>")
.action((n1,n2)=>{
    const sum = Number(n1) + Number(n2);
    console.log(sum);
})

program
.command("multiply <n1> <n2>")
.action((n1,n2)=>{
    const multiply = Number(n1) * Number(n2);
    console.log(multiply);
})
program
.command("divide <n1> <n2>")
.action((n1,n2)=>{
    if (n2 === 0) {
      console.log("❌ Cannot divide by zero");
      return;
    }
    const divide = Number(n1) / Number(n2);
    console.log(divide);
})


program
.command("floor <n1> <n2>")
.action((n1,n2)=>{
    const floor = Math.floor(Number(n1) / Number(n2));
    console.log(floor);
})
program
.command("ceil <n1> <n2>")
.action((n1,n2)=>{
    const ceil = Math.ceil(Number(n1) / Number(n2));
    console.log(ceil);
})
program
  .command("mod <n1> <n2>")
  .action((n1, n2) => {
    console.log(Number(n1) % Number(n2));
  });
program
  .command("pow <base> <exp>")
  .action((base, exp) => {
    console.log(Math.pow(Number(base), Number(exp)));
  });
program
  .command("sqrt <n>")
  .action((n) => {
    console.log(Math.sqrt(Number(n)));
  });
program
  .command("percent <value> <total>")
  .action((value, total) => {
    value = Number(value);
    total = Number(total);
    console.log((value / total) * 100 + "%");
  });
program.parse();
