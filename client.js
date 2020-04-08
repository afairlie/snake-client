const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  // establishing connection here - storing the connection net.connection in conn variable.
  const conn = net.createConnection({ 
    host: 'localhost', // Vasily's public IP (135.23.222.148) for snake server, could also set to 'localhost'
    port: 50541
  });

  // log confirmation connection is successful - ensures next functions run after connection.
  conn.on('connect', () => {
    console.log('successfully connected to server 👍');
  });

  // write name (3 chars max) to server
  conn.write('Name: IAF');

  // interpret incoming data as utf8 encoded text
  conn.setEncoding('utf8'); 

  // when the server sends me data, console.log that data
  conn.on('data', (data) => {
    console.log(data);
  })

  // connect function returns the net.connection for any files that requires client
  return conn;
}

module.exports = { connect };