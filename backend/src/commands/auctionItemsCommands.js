#!/usr/bin/env node
import inquirer from 'inquirer';
import { Command } from 'commander';
import { seedDatabase } from '../seedData/seedAuctionItems.js'
import { connectDB, closeDB } from '../../index.js';
import {
    addItem,
    findItem,
    updateItem,
    removeItem,
    listItems
} from '../crudFunctions/auctionFunctions.js';

const program = new Command();

const auctionQuestions = [
    { type: "input", name: "title", message: "Auction Item Title:" },
    { type: "input", name: "description", message: "Description:" },
    { type: "input", name: "startPrice", message: "Starting Price:", filter: Number },
    { type: "input", name: "reservePrice", message: "Reserve Price:", filter: Number },
    { type: "input", name: "image", message: "Image"}
];

//___ SET UP CLI ___
program
    .version('1.0.0')
    .description('Auction Items Management CLI');

//___ ADD ITEM TO DB ___
program
    .command('add')
    .alias('a')
    .description('Add a new auction item')
    .action(async () => {
        const answers = await inquirer.prompt(auctionQuestions);
        await addItem(answers);
    });


//___ FIND ITEM IN DB ___
program
    .command('find <title>')
    .alias('f')
    .description('Find an auction item by title')
    .action(async (title) => {
        await findItem(title);
    });

program
    .command('list')
    .alias('l')
    .description('List all auction items')
    .action(async () => {
        await listItems();
    });

//___ UPDATE ITEM BY NAME IN DB ___
program
    .command('update <title>')
    .alias('u')
    .description('Update an auction item by title')
    .action(async (title) => {
        const answers = await inquirer.prompt(auctionQuestions);
        await updateItem(title, answers);
    });

program
    .command('remove <title>')
    .alias('r')
    .description('Remove an auction item by title')
    .action(async (title) => {
        await removeItem(title);
    });


program
    .command('seed')
    .alias('sd')
    .action(async () => {
        await seedDatabase();
        console.log('Completed seeding data to database.');
    });

async function runCli() {
    await connectDB();
    await program.parseAsync(process.argv);
    await closeDB();
}

runCli();







