import { Body, Controller, HttpCode, HttpException, HttpStatus, Post } from '@nestjs/common';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { AuthDTO } from './auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UserService) { }
    
    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(@Body() authDTO: AuthDTO): Promise<Boolean> {
        let user: User = await this.userService.findOne(authDTO.username, authDTO.password);

        if (user) {
            let message: any = {};
            message.success = true;

            return message;
        } else {
            throw new HttpException('El nombre de usuario o clave son incorrectos', HttpStatus.BAD_REQUEST);
        }
    }
}