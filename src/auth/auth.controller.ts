import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
    @Get('google')
    @UseGuards(AuthGuard('google')) 
    async googleAuth() {
        // Este método inicia el flujo de autenticación con Google
        // No necesita hacer nada aquí, Passport se encargará de redirigir al usuario
    }
    @Get('google/redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        return {
            mensaje: 'Login con Google exitoso',
            usuario: req.user,
        };
    }
}
