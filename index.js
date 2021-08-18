const logger = require('./utils/logger')();
const http = require('http');
const mockserver = require('mockserver');
// logger.loggerOff();

const PORT = process.env.PORT || 9002;

mockserver.headers = ['Authorization'];

logger.debug('Server Started');

http.createServer(mockserver('./mocks')).listen(PORT,()=>console.log('Listening on port: '+PORT));