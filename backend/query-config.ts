import Pool from "pg";

export const pool = new Pool.Pool({
    user: "example",
    host: "localhost",
    database: "exampledb",
    password: "password"
})