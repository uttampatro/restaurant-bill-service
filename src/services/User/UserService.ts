import User from '../../entity/User';
import { LoginUserDTO, SaveUserDTO } from './UserDTO';

class UserService {
    async register(dto: SaveUserDTO) {
        const { name, email, password } = dto;
        const user = new User({
            name,
            email,
            password,
        });
        await user.save();
        return user;
    }
    async login(dto: LoginUserDTO) {
        const { email } = dto;
        const user = await User.findOne({ email });
        return user;
    }
}

export default new UserService();
