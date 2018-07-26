const greet = require('./greet');
const chalk = require('chalk');

const styledMessage = chalk.bgWhite.green(greet('Xola'));
console.log(styledMessage);

var figlet = require('figlet');
 
figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});


console.log(figlet.textSync('Boo!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));
