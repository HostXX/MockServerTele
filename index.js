const http = require('http');
const mockserver = require('mockserver');
const PORT = 9001;
 
mockserver.headers = ['Authorization'];


http.createServer(mockserver('./mocks')).listen(PORT,()=>console.log('Listening on port: '+PORT));