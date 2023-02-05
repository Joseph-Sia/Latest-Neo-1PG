module.exports = class Command {
  name = ' ';
  category = 'General';

  execute(msg) {
    throw new TypeError('Command not implemented.');
  } 
}