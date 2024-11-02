import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe, BadRequestException, Res, Req, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Response,Request } from 'express';
import { request } from 'http';
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService,
    private jwtService: JwtService
  ) {}

 //regisster user
  @Post()
 async create(@Body() createUserDto: CreateUserDto) {
     const hashpassword=await bcrypt.hash(createUserDto.password,12);
    return this.usersService.create(createUserDto)
  }

//login user
    @Post('login')
    async login(
        @Body('email') email: string,
        @Body('password') password: string,
        @Res({passthrough: true}) response: Response
    ) {
        const user = await this.usersService.findUser(email,password);

        if (!user) {
            throw new BadRequestException('invalid credentials');
        }
        /* if (!await bcrypt.compare(password, user.password)) {
            throw new BadRequestException('invalid credentials');
        } */
        const jwt = await this.jwtService.signAsync({id: user.id});

        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: 'success'
        };
    }

    @Post('logout')
    async logout(@Res({passthrough: true}) response: Response) {
        response.clearCookie('jwt');

        return {
            message: 'success'
        }
    }

    @Get('auth')
    async user(@Req() request: Request) {
        try {
            const cookie = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            const user = await this.usersService.findOne({id: data['id']});

            const {password, ...result} = user;

            return result;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }
  @Get()
  findAll() {
    return this.usersService.findAll();
  }


  @Get(':id')
  findOne(@Param('id',ParseIntPipe) id: number) {
       return this.usersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }





}