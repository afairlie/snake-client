const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const connected = connect();
setupInput(connected);

// syntax for this could also be:
// setupInput(connect()); // connection called and passed as a param of setupInput
// either way, connection has to be called (so it's actually net.createConnection..ed before it's passed to setupInput)