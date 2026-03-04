#!/usr/bin/env node

const CLI_Engine = require("./cliEngine/cliEngine");
const Greet_Command = require("./commands/greet");
const Joke = require("./commands/joke");
const Math_Commands = require("./commands/math");

const engine = new CLI_Engine();

engine.registerCommands([Greet_Command, Joke, Math_Commands]);
engine.run();
