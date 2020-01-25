#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const nome = chalk.white("Tiago Lage Payne de Pádua");
const apelido = chalk.white("tiagolpadua");

const rotOcupacao = chalk.white.bold("Ocupação:");
const ocupacao = chalk.white("Analista Sênior no Banco do Brasil");

const rotTwitter = chalk.white.bold("Twitter:".padStart(9));
const twitter = chalk.grey("https://twitter.com/") + chalk.cyan("tiagolpadua");

const rotGithub = chalk.white.bold("GMail:".padStart(9));
const github = chalk.yellow("tiagolpadua@gmail.com");

const rotGmail = chalk.white.bold("GitHub:".padStart(9));
const gmail = chalk.grey("https://github.com/") + chalk.green("tiagolpadua");

const rotLinkedIn = chalk.white.bold("LinkedIn:");
const linkedIn =
  chalk.grey("https://linkedin.com/in/") + chalk.blue("tiagolpadua");

const rotCartao = chalk.white.bold("Cartão:".padStart(9));
const cartao = chalk.red("npx") + " " + chalk.white("tiagolpadua");

let saida = chalk.green(`   ${nome} / ${apelido}\n\n`);
saida += `${rotOcupacao} ${ocupacao}\n\n`;
saida += `${rotTwitter} ${twitter}\n`;
saida += `${rotGmail} ${gmail}\n`;
saida += `${rotGithub} ${github}\n`;
saida += `${rotLinkedIn} ${linkedIn}\n\n`;
saida += `${rotCartao} ${cartao}`;

const opcoes = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

console.log(boxen(saida, opcoes));
