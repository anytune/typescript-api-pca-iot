module.exports = {
    type: process.env.ENV_TYPEORM_CONNECTION,
    host: process.env.ENV_TYPEORM_HOST,
    port: process.env.ENV_TYPEORM_PORT,
    username: process.env.ENV_TYPEORM_USERNAME,
    password: process.env.ENV_TYPEORM_PASSWORD, 
    database: process.env.ENV_TYPEORM_DATABASE,
    synchronize: false,
    entities: [ 
        process.env.PORT ? __dirname + "/build/app/models/*.entity.js" : "src/app/models/*.entity.ts"
    ],
    migrations: [
        process.env.PORT ? __dirname + "/build/database/migrations/*{.js.ts}" : "src/database/migrations/*{.js.ts}"
    ],
    cli: {
        entitiesDir: "src/app/models",
        migrationsDir: "src/database/migrations",
    }
}