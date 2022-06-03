import Pool from "pg";

export const pool = new Pool.Pool({
    user: "postgres",

    host: "localhost",

    database: "exampledb",

    password: "31102000",

    port: 5432
})