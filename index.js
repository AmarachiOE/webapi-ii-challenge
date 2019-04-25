require('dotenv').config();

// import server.js
// YARN ADD EXPRESS !!!
const server = require("./server");
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`\n*** Girl. Your Server is Running on http://localhost:${port} ***\n`);
});
