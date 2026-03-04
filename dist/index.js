#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CLI_Engine = require("./cliEngine/cliEngine");
const Greet_Command = require("./commands/greet");
const Joke = require("./commands/joke");
const Math_Commands = require("./commands/math");
const Github_Command = require("./commands/github");
const Quote_Command = require("./commands/quote");
const engine = new CLI_Engine();
engine.registerCommands([Greet_Command, Joke, Math_Commands, Github_Command, Quote_Command]);
engine.run();
