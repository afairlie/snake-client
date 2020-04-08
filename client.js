const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });

  // log successful connection - ensures next functions run after connection.
  conn.on('connect', () => {
    console.log('successfully connected to server 👍');
  })
  
  // write name (3 chars max) to server
  conn.write('Name: IAF');

  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  })
  return conn;
}

module.exports = { connect };