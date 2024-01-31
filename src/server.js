const app = require('./app');
const connectDB = require('./config/db');
const {serverPort} = require('./secret');

app.listen(serverPort, () => {
  console.log(`Server Listening On: http://localhost:${serverPort}`);
  connectDB();
});