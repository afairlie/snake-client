const stdin = process.stdin;
// 1.2 the connection variable for this module is set globally, here.
let connection;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

// 1.0 function to receive commands from user via stdin. receives a connection as its parameter
const setupInput = function(conn) {
  // 1.2 the connection variable is set to whatever connection param the setupInput function receives, here.
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  // this calls stdin to start actually listening for user input (?)
  stdin.resume();
  // this is the function listening for when user inputs data - ie 'w' key for up. 
  stdin.on('data', handleUserInput);
  return stdin;
}

//  callback function to handle user input, registered as the "data" callback handler for stdin.on called within setupInput
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write('Move: up')
  }
  if (key === 'a') {
    connection.write('Move: left');
  }
  if (key === 's') {
    connection.write('Move: down');
  }
  if (key === 'd') {
    connection.write('Move: right')
  }
  if (key === 'u') {
    connection.write('Say: U can\'t beat me!')
  }
  if (key === 'i') {
    connection.write('Say: I\'m kickin\'n ur butt')
  }
  if (key === 'o') {
    connection.write('Say: OMG!')
  }
  if (key === 'p') {
    connection.write('Say: Play nice ;)')
  }
}
// https://nodejs.org/api/process.html#process_process_exit_code

module.exports = { setupInput }