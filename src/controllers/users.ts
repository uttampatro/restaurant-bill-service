import { Request, Response } from 'express';
import { UserService } from '../services';
import bcrypt from 'bcryptjs';

class UserController {
    registerUser = async (req: Request, res: Response) => {
        try {
            const name = req.body.name;
            const email = req.body.email;
            const password = req.body.password;
            //Hash the password
            const salt = await bcrypt.genSalt(10);
            const hasedPassword = await bcrypt.hash(password, salt);
            const user = await UserService.register({
                name: name,
                email: email,
                password: hasedPassword,
            });

            return res.json(user);
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: 'Something went wrong',
            });
        }
    };
    loginUser = async (req: Request, res: Response) => {
        try {
            const email = req.body.email;
            const password = req.body.password;
            const user = await UserService.login({ email: email });
            if (!user) {
                return res.status(400).send('Email not found!');
            }
            //password is correct or not
            const validPassword = await bcrypt.compare(password, user.password);
            if (!validPassword) {
                return res.status(400).send('Invalid password');
            }

            return res.json(user);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    };
}

export default new UserController();
