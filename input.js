const stdin = process.stdin;
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
}

//  function to handle user input, registered as the "data" callback handler for stdin.
const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
}
// https://nodejs.org/api/process.html#process_process_exit_code

module.exports = { setupInput }