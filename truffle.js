// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    ganache: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*' // Match any network id
    },
    development: {
      host: "localhost",
      port: 9545,
      network_id: "*", // Match any network id
      gas:500000,
    }    
  }
}
