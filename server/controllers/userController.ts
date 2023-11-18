import ApiError from "../error/ApiError";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User, Wallet } from "../models/models";
import { Request, Response, NextFunction } from "express";

const generateJwt = (id: number, login: string): string | undefined => {
    const SECRET_KEY = process.env.SECRET_KEY;
    if (!SECRET_KEY) return;

    return jwt.sign({ id, login }, SECRET_KEY, { expiresIn: "24h" });
};

class UserController {
    public async registration(req: Request, res: Response, next: NextFunction) {
        const { login: incomingLogin, password: incomingPassword } = req.body;

        if (!incomingLogin || !incomingPassword) {
            return next(
                ApiError.badRequest("Некорректный e-mail или password")
            );
        }

        const candidate = await User.findOne({
            where: { login: incomingLogin },
        });

        if (candidate) {
            return next(
                ApiError.badRequest(
                    "Пользователь с таким логином уже существует"
                )
            );
        }

        const hashPassword = await bcrypt.hash(incomingPassword, 5);

        const user = await User.create({
            login: incomingLogin,
            password: hashPassword,
        });

        const { id, login } = user.dataValues;

        if (!id) return;

        await Wallet.create({ userId: id });

        const token = generateJwt(id, login);
        return res.json({ token });
    }

    public async login(req: Request, res: Response, next: NextFunction) {
        const { login: incomingLogin, password: incomingPassword } = req.body;

        const user = await User.findOne({ where: { login: incomingLogin } });

        if (!user) {
            return next(ApiError.internal("Пользователь не найден"));
        }

        const { id, login, password } = user.dataValues;

        if (!id) {
            return next(ApiError.internal(`Пользователь с id ${id} не найден`));
        }

        let comparePassword = bcrypt.compareSync(incomingPassword, password);

        if (!comparePassword) {
            return next(ApiError.internal("Неверно указан пароль"));
        }

        const token = generateJwt(id, login);

        return res.json({ token });
    }

    public async check(req: Request, res: Response, next: NextFunction) {
        const { id, login } = req.body;

        const token = generateJwt(id, login);

        return res.json({ token });
    }
}

export default UserController;
