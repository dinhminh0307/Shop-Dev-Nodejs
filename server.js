const app = require("./src/app");
const port  = 8080;

// init server for browser to get in

const server = app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})

process.on('SIGINT', () => {
    server.close(() => console.log('Closed server')); // user press control c, close the server
})