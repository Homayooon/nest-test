export default () => ({
    httpHost: 'localhost',
    httpPort: process.env.HTTP_PORT || 3000,
    mySqlTypeOrm: {
        host: process.env.MYSQL_TYPEORM_HOST || 'localhost',
        username: process.env.MYSQL_TYPEORM_USERNAME || 'root',
        password: process.env.MYSQL_TYPEORM_PASSWORD || 'root',
        database: process.env.MYSQL_TYPEORM_DATABASE || 'nest-test',
        port: process.env.MYSQL_TYPEORM_PORT || 3306,
        synchronize: (process.env.MYSQL_TYPEORM_SYNCHRONIZE === 'true') || false,  // true → Development | false → Production
    },
});
