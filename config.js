function env(key, _default, type = 's') {
    if (!!process.env[key] === false) {
        return _default;
    }
    const value = process.env[key];
    switch (type) {
        case 'b':
            return value.toLowerCase() === 'true';
        case 'n':
            return parseInt(value, 10);
        default:
            return value;
    }
}


module.exports = {
    api: {
        url: env('API_URL', 'http://localhost:3004/api/'),
    },
    db: {
        sqlserver: {
            server: env('SQLSERVER_SERVER', 'localhost'),
            database: env('SQLSERVER_DB', 'Hospital'),
            user: env('SQLSERVER_USER', 'sa'),
            password: env('SQLSERVER_PASS', 'blanca10'),
        },
        mongo: {
            url: env('MONGO_HOST', 'mongodb://localhost:27017'),
            database: env('MONGO_DB', 'rrhh_testing')
        } 
    }
}
