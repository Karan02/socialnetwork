const { host, port, database } = require('pg/lib/defaults');
const app = require('./src/app');
const pool = require('./src/pool');

pool.connect({
    host:'localhost',
    port: 5432,
    database: 'socialnetwork',
    user: 'postgres',
    password: 'admin'
})
.then(() => {
    app().listen(3005, () => {
    console.log('Server is running on port 3005');
});
}).catch((err) => {
    console.error('Failed to connect to the database:', err);
});
