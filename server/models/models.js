const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    login:{type:DataTypes.STRING, unique:'true' },
    password:{type:DataTypes.STRING},
}) 

const Wallet = sequelize.define('wallet',{
    id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING},
    incomes:{type:DataTypes.STRING,defaultValue:'0'},
    expenses:{type:DataTypes.STRING,defaultValue:'0'},
})  

User.hasMany(Wallet);
Wallet.belongsTo(User)

module.exports = {
    User,
    Wallet,
}