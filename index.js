const chalk = require('chalk');
const log = console.log;

log(chalk.red('Happy ') + chalk.yellowBright('Birthday ') +
chalk.green('to ') + chalk.underline.magenta('YOU') + chalk.magenta('! '));
log(chalk.italic.black('***chachacha***'));
log(chalk.cyan('Happy ') + chalk.green('Birthday ') +
chalk.yellow('to ') + chalk.underline.red('YOU') + chalk.red('! '));
log(chalk.italic.black('***chachacha***'));
log(chalk.red('Happy ') + chalk.yellowBright('Birthday ') +
chalk.green('dear ') + chalk.magenta('ADAM') + chalk.magenta('! '));
log(chalk.cyan('Happy ') + chalk.green('Birthday ') +
chalk.yellow('to ') + chalk.underline.red('YOU') + chalk.red('! '));
const chalkAnimation = require('chalk-animation');
chalkAnimation.rainbow('***AND MANY MORE***');

