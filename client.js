const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('connect', () => {
    conn.write('Name: BBP');
    console.log('Successfully connected to game server');
    // Testing server movement commands
    // conn.write("Move: up");
    // setTimeout(() => {
    //   conn.write("Move: up");;
    // }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: up");;
    // }, 1500);
    // setTimeout(() => {
    //   conn.write("Move: up");;
    // }, 2000);
    // setTimeout(() => {
    //   conn.write("Move: up");;
    // }, 2500);

    // setInterval(() => {
    //    conn.write("Move: up");;
    //  }, 1000);

    // setInterval(() => {
    //   conn.write("Move: Left");;
    // }, 1000);
  
  });

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  
  return conn;
};

module.exports = connect;