const {Wallet} = require('../models/models')


class WalletController {
    async create(req, res) {
        const {title, incomes, expenses} = req.body
        const wallet = await Wallet.create({title, incomes, expenses})
        return res.json(wallet)
    }
    async delete(req, res) {

    }
    async getAll(req, res) {
        const wallet = await Wallet.findAll() 
        res.json(wallet)
    }
    async getOne(req, res) {
        const {id} = req.params
        const wallet= await Wallet.findOne(
            {
                where:{id},

            },
        )
        return res.json(wallet.title)
    }
}

module.exports = new WalletController();