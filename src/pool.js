const pg = require('pg');


// normally we would create pool like this. not for multiple databases.
// const pool = new pg.Pool({
//     user : 'postgres',
//     host : 'localhost',
//     database : 'socialnetwork',
//     password : 'admin',
//     port : 5432
// });

// module.exports = pool;



class Pool {
    _pool = null;
    connect(options) {
        this._pool = new pg.Pool(options);
        return this._pool.query('SELECT 1 + 1;');
    }

    close() {        
            return this._pool.end();
    }

    query(sql,params){
        return this._pool.query(sql,params);
    }
}

module.exports = new Pool();