import sequelize from "../db";
import { DataTypes, Model } from "sequelize";

interface UserAttributes {
    id?: number;
    login: string;
    password: string;
}

export const User = sequelize.define<Model<UserAttributes>>("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    login: { type: DataTypes.STRING, unique: "true" },
    password: { type: DataTypes.STRING },
});

interface WalletAttributes {
    id?: number;
    userId: number;
    title?: string;
    incomes?: string;
    expenses?: string;
}

export const Wallet = sequelize.define<Model<WalletAttributes>>("wallet", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: "id",
        },
    },
    title: { type: DataTypes.STRING, defaultValue: "Default Wallet" },
    incomes: { type: DataTypes.STRING, defaultValue: "0" },
    expenses: { type: DataTypes.STRING, defaultValue: "0" },
});

User.hasMany(Wallet, { foreignKey: "userId" });
Wallet.belongsTo(User, { foreignKey: "userId" });
