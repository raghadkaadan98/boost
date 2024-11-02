import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
@Module({
  imports:[TypeOrmModule.forFeature([UserEntity]) ,JwtModule.register({secret:'secret',
    signOptions:{expiresIn:'1d'}
  })], 
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
