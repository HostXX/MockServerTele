const logger = require('./utils/logger')();
const http = require('http');
const mockserver = require('mockserver');
// logger.loggerOff();

const PORT = process.env.PORT || 8000;

mockserver.headers = ['Authorization'];

logger.debug('Server Started');

http.createServer(mockserver('./mocks','verbose')).listen(PORT,()=>console.log('Listening on port: '+ PORT));