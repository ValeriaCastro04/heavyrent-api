import { Controller, UseGuards, Post, Get, Body, Req} from '@nestjs/common';
import { RentalsService } from './rentals.service';
import { CreateRentalDto } from './dto/create-rental.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('rentals')
@ApiBearerAuth()
@Controller('rentals')
export class RentalsController {

    constructor(
        private readonly rentalsService: RentalsService
    ) { }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    create(@Body() dto: CreateRentalDto, @Req() req) {
        return this.rentalsService.create(dto, req.user);
    }
zz
    @Get()
    @UseGuards(AuthGuard('jwt'))
    findByUser(@Req() req) {
        return this.rentalsService.findByUser(req.user.userId);
    }

}
