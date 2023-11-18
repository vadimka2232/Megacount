import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.DB_NAME || "Megacount",
    process.env.DB_USER || "postgres",
    process.env.DB_PASSWORD || "admin",
    {
        dialect: "postgres",
        host: process.env.DB_HOST || "5000",
        port: Number(process.env.DB_PORT) || 5432,
    }
);

export default sequelize;
